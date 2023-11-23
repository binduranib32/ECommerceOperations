trigger Test on Account (after update) {
   set<id> AccounidSet = new set<id>();
    list<contact> contoUpdate=new list<contact>();
    for(Account acc:trigger.new)
    {
        if(acc.BillingState!= trigger.oldmap.get(acc.Id).BillingState){
            AccounidSet .add(acc.id);
        }
    }
    for(contact con :[select id,MailingState,Account.BillingState from contact where Accountid IN: AccounidSet ]){
        for(Account acc:trigger.new){
            if(con.AccountId==acc.id){
            con.MailingState=acc.BillingState;
                contoUpdate.add(con);
            }
        }
    }
    update contoUpdate;
}