import { LightningElement, track, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountWire1.getAccountList';

export default class AccountList1 extends LightningElement {
   @track accounts;
   @wire(getAccountList)accounts;
}