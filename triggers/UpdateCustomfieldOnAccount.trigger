//trigger that updates a custom field on the Account object whenever a new Contact is inserted or updated 
trigger UpdateCustomfieldOnAccount on Contact (after insert, after update) {
    
    //create a set(accountIdsToUpdate to store account Ids associated with contact records
  set<Id> accountIdsToUpdate = new set<Id>();
    
    //trigger iterates through the contact records
    for(Contact con : Trigger.new){
        
        //checking the condition if the contact email is not empty and the email domain ends with 'example.com'
        if(con.Email != null && con.Email.endsWith('example.com')){
            //if the condition is met the AccounId is added to the accountIdsToUpdate set
            accountIdsToUpdate.add(con.AccountId);
        }
    }
    //check if any account ids to update, query/retrieve account records
    if(!accountIdsToUpdate.isEmpty()){
        List<Account> accountsToUpdate=[Select Id from Account Where Id IN:accountIdsToUpdate];
        
        //iterate through the retrieved account records(accountsToUpdate)
        for(Account acc : accountsToUpdate){
           // if condition is met, set custom field value to true
            acc.checkEmail__c=true;
        }
        
        //update the modified account records
        update accountsToUpdate;
    }
    
}