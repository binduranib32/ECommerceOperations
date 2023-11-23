trigger ContactTriggerSCM on Contact (before insert, after update) {
   
    for(Contact c : trigger.new){
        c.Description='Added via trigger';
    }
}