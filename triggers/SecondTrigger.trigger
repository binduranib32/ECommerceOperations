trigger SecondTrigger on Account (before insert,before update) {
    if(trigger.isInsert)
    {
        Account a=Trigger.new[0];
        a.Name=a.Name+'Limited';
        a.AnnualRevenue=30000;
     }
   
}