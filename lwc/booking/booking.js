import { LightningElement,track,api } from 'lwc';
import Booking__c from '@salesforce/schema/Booking__c';
//import 	Name from '@salesforce/schema/Booking__c.Name';
import CustomerDetails__c from '@salesforce/schema/Booking__c.CustomerDetails__c';
import DateOfCheckIn__c from '@salesforce/schema/Booking__c.DateOfCheckIn__c';
import DateOfCheckOut__c from '@salesforce/schema/Booking__c.DateOfCheckOut__c';
import DateOfReservation__c from '@salesforce/schema/Booking__c.DateOfReservation__c';
import NoOfDays__c from '@salesforce/schema/Booking__c.NoOfDays__c';
import Room__c from '@salesforce/schema/Booking__c.Room__c';
import Amount__c from '@salesforce/schema/Booking__c.Amount__c';
import PaymentMode__c from '@salesforce/schema/Booking__c.PaymentMode__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Booking extends LightningElement {
    @api recordId;
    @api objectApiName;
    @track fields=[CustomerDetails__c,DateOfCheckIn__c,DateOfCheckOut__c,DateOfReservation__c,NoOfDays__c,Room__c,Amount__c,PaymentMode__c];
    connectedCallback()
     {
      this.objectApiName=this.objectApiName;
     }

      handleRecordCreated(event){
          const evnt=new ShowToastEvent({
           title:"Customer Record Has Been Created Successfully!",
           message:"Customer Record Created:", //+event.details.id,
           variant:"success",
           mode:"dismissable"
          });
          this.dispatchEvent(evnt);
         // this.template.querySelectorAll('lightning-input-field').forEach(element => element.reportValidity());
      }
}