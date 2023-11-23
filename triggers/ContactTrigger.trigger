trigger ContactTrigger on Contact (before insert)
{
  Set<String> accNames=new Set<String>();
    for(Contact c:Trigger.New)
    {
        accNames.add(c.Company__c);
    }
    Map<String,Account> accMap=new Map<String,Account>();
    for(Account acc:[Select Id,Name,BillingStreet,BillingCity,BillingState,BillingCountry from Account where Name IN:accNames])
    {
        accMap.put(acc.Name,acc);
       
    }    
    for(Contact c:Trigger.New)
    {
    if(accMap.containsKey(c.Company__c))
    {
    Account a = accMap.get(c.Company__c);
    c.AccountId = a.Id;
    c.MailingStreet = a.BillingStreet;
    c.MailingCity=a.BillingCity;
    c.MailingState=a.BillingState;
    c.MailingCountry=a.BillingCountry;
        
    }
   }
}