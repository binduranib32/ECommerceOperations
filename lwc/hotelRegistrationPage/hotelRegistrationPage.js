import { LightningElement,track,api } from 'lwc';
import CustomerDetails__c from '@salesforce/schema/CustomerDetails__c';
import CustomerName__c from '@salesforce/schema/CustomerDetails__c.CustomerName__c';
import Address__c from '@salesforce/schema/CustomerDetails__c.Address__c';
import CustomerDOB__c from '@salesforce/schema/CustomerDetails__c.CustomerDOB__c';
import Email__c from '@salesforce/schema/CustomerDetails__c.Email__c';
import Gender__c from '@salesforce/schema/CustomerDetails__c.Gender__c';
import Phone__c from '@salesforce/schema/CustomerDetails__c.Phone__c';
import Nationality__c from '@salesforce/schema/CustomerDetails__c.Nationality__c';
import City__c from '@salesforce/schema/CustomerDetails__c.City__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class HotelRegistrationPage extends LightningElement {
   // ObjectApiName = CustomerDetails__c;

   // @api recordId;
    @api objectApiName;
    @track fields=[CustomerName__c , Address__c,CustomerDOB__c,Email__c,Gender__c,Phone__c,Nationality__c,City__c];
    connectedCallback()
     {
      this.objectApiName=this.objectApiName;
     }

    //Fields = [CustomerName__c , Address__c,CustomerDOB__c,Email__c,Gender__c,Phone__c,Nationality__c,City__c ];
  
      handleRecordCreated(event){
          const toastevent=new ShowToastEvent({
           title:"Customer Record Has Been Created Successfully!",
           message:"Customer Record Created: "+event.details.id,
           variant:"success"
          });
          this.dispatchEvent(toastevent);
      }
}