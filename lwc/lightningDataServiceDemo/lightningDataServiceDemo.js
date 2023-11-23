import { api, LightningElement, track } from 'lwc';
import accountName from '@salesforce/schema/Account.Name';
import annualRevenue from '@salesforce/schema/Account.AnnualRevenue';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class LightningDataServiceDemo extends LightningElement {
  @api recordId;
  @api objectApiName;
  @track fields=[accountName,annualRevenue];
  connectedCallback()
  {
    this.objectApiName=this.objectApiName;
  }
   handleLoad()
   {
     const evnt=new ShowToastEvent({
       title:"Loaded",
       message:"Data Loaded",
       variant: "info",
       mode:"dismissable"
     });
     this.dispatchEvent(evnt);
   }
   handleError()
   {
     const evnt=new ShowToastEvent({
       title:"Error!",
       message:"Error Occured",
       variant: "error",
       mode:"dismissable"
     });
     this.dispatchEvent(evnt);
   }

   handleSuccess(event)
   {
     const evnt=new ShowToastEvent({
       title:"Success...",
       message:"Data Saved Successfully",
       variant: "success",
       mode:"dismissable"
     });
     this.dispatchEvent(evnt);
   }
}