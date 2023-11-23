trigger AddressTriggerOnAccount on Account (before insert,before update) {//use After Update for Description Update(before update for Address fields update)
  
   // for(Account a :Trigger.new){
   //Update Address values on Discription
   // if(a.Description == Null){
    //a.Description = a.BillingStreet + '\n' + a.BillingCity + '\n' + a.BillingState + '\n' + a.BillingPostalCode + '\n' + a.BillingCountry;
   //  }}
     if(Trigger.isinsert || Trigger.isupdate ){
    for(Account a:Trigger.New){
            a.Description=a.BillingCity+'\n'+a.BillingStreet+'\n'+a.BillingPostalCode+'\n'+a.BillingState+'\n'+a.BillingCountry;
    }
   }
    if(Trigger.isupdate){
        for(Account a:Trigger.New){
            if(a.BillingCountry=='India' && a.BillingPostalCode.length()!=6){
                a.addError('Invalid data entered');
            }
    	}
}
}