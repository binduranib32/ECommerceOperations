trigger UpdateBookLastModifiedDate on Contact (after update) {
    Set<Id> bookIdsToUpdate = new Set<Id>();

    // Collect the IDs of Book__c records to update
    for (Contact contact : Trigger.new) {
        if (contact.Bookb__c != null) {
            bookIdsToUpdate.add(contact.Bookb__c);
        }
    }

    // Retrieve and update the Book__c records
    List<Book__c> booksToUpdate = [
        SELECT Id, Last_Modified_Date__c
        FROM Book__c
        WHERE Id IN :bookIdsToUpdate
    ];

    for (Book__c book : booksToUpdate) {
        book.Last_Modified_Date__c = Date.today();
    }

    // Update the Book__c records
    update booksToUpdate;
}