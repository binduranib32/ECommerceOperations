trigger PreventDeleteClosedWonOpportunity on Opportunity (before delete) {
    
    for(Opportunity opp : Trigger.old){
        if(opp.StageName == 'Closed Won'){
            opp.addError('Opportunity with stage Closed Won cant be deleted...');
        }
     }
}