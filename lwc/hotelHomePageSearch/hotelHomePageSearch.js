import { LightningElement,wire,track,api } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Hotel__c from '@salesforce/schema/Hotel__c';
import HotelType__c from '@salesforce/schema/Hotel__c.HotelType__c';
import HotelCity__c from '@salesforce/schema/Hotel__c.HotelCity__c';
import findHotels from '@salesforce/apex/HotelHome1.findHotels';
import { NavigationMixin } from 'lightning/navigation';
//import getHotels from '@salesforce/apex/LWCDataTableSortingExample.getHotels';

export default class HotelHomePageSearch extends NavigationMixin(LightningElement) {
    @track HotelTypevalue ='';
    @track HotelCityValue='';

    @track htype='City Hotel';
    @track hcity='Chennai';

    @wire(findHotels, {HotelTypevalue:'$htype',HotelCityValue:'$hcity'}) HotelInfo;
    @track columns = [
        { label: 'Id', fieldName: 'Id'},
        { label: 'Hotel Type', fieldName: 'HotelType__c' },
        { label: 'Hotel City', fieldName: 'HotelCity__c'},
        { label: 'Hotel State', fieldName: 'HotelState__c' },
       
    ];
 



//  @wire(findHotels, {HotelTypevalue:'$htype',HotelCityValue:'$hcity'}) HotelInfo;
  // on select picklist value to show the selected value
//    handle_HotelType_Change(event) {
//     this.HotelTypevalue = event.detail.value;
//      //event.preventDefault();
//  }

//     handle_HotelCity_Change(event) {
//       this.HotelCityValue = event.detail.value;
//       //event.preventDefault();
//      }

//       handle_Submit(event){
//         this.htype=this.HotelTypevalue;
//         this.hcity=this.HotelCityValue;

//         event.preventDefault();
       
        
    
//       this[NavigationMixin.Navigate]({
//         type: 'standard__webPage',
//         attributes: {
//               url:"https://ceptesbatch1-2022-developer-edition.ap27.force.com/HotelReservation/s/samplebooking" 
            
//         }
//     });
// }
   // @api recordId;
    // navigateToBookingPage() {
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__navItemPage',
    //         attributes: {
    //             apiName: 'HotelReservation',
    //             actionName: 'view',
    //             recordId: this.recordId,
               
    //             //componentName: 'c__HotelBooking'
                
    //         }
    //     });
    // }

}