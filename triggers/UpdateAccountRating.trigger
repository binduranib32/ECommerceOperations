trigger UpdateAccountRating on Opportunity (after insert) {

    List<Id> accountIdsToUpdate = new List<Id>();

    for (Opportunity opp : Trigger.new) {
        // Check if the Opportunity has a CloseDate within the next 30 days and is Closed/Won
        if (opp.CloseDate >= System.today() && opp.CloseDate <= System.today().addDays(30) && opp.StageName == 'Closed Won') {
            accountIdsToUpdate.add(opp.AccountId);
        }
    }

    // Update Account Rating to "Hot" for the relevant Accounts
    if (!accountIdsToUpdate.isEmpty()) {
        List<Account> accountsToUpdate = [SELECT Id, Rating FROM Account WHERE Id IN :accountIdsToUpdate];
        for (Account acc : accountsToUpdate) {
            acc.Rating = 'Hot';
        }
        update accountsToUpdate; // Add this line to update the Account records
    }
}