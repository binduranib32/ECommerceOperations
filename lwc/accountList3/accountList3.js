import { LightningElement, track } from 'lwc';
import getAccountList from '@salesforce/apex/AccountWire1.getAccountList';

export default class AccountList3 extends LightningElement {
  @track accounts;
  @track error;
  handleLoad()
  {
      getAccountList().then(result=>{
         this.accounts=result;
        })
        .catch(error=>{
                this.error=error;
            });
  }
}