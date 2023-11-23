trigger TriggerOnAddress on CustomerProfile__c (before insert, before update) {
    
    for(CustomerProfile__c customer : Trigger.new){
        if(customer.Address__c == null){
            customer.addError('Address can not be null..!');
        }
    }
}