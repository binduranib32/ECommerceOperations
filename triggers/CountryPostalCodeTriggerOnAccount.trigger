trigger CountryPostalCodeTriggerOnAccount on Account (before insert,before update) {
  //if(Trigger.isupdate)
    //  {
         //Update BillingCountry & Postal Code according to the condition
        for(Account a:Trigger.New)
          {
           
            if(a.BillingCountry=='India' && a.BillingPostalCode.length()!=6)
            {
                a.addError('Invalid data entered');
            }
         }
    //  }
}