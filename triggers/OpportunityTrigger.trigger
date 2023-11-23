trigger OpportunityTrigger on Opportunity (before insert, before update) {
    
   for (Opportunity opp : Trigger.new) {
        // Example logic: If Amount is greater than $1000, set Stage to 'Closed Won'
        if (opp.Amount > 1000) {
            opp.StageName = 'Closed Won';
        }
    }
}