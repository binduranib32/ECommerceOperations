import { LightningElement, track, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountWire1.getAccountList';

export default class AccountList2 extends LightningElement {
  @track accounts;
  @track error;
  @wire(getAccountList)
  wiredAccounts({error,data})
    {
        if(data)
        {
            this.accounts=data;
        }else if(error)
        {
            this.error=error;
        }
    }
}