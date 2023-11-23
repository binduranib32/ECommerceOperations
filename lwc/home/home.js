import { LightningElement,wire,track,api } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Hotel__c from '@salesforce/schema/Hotel__c';
import HotelType__c from '@salesforce/schema/Hotel__c.HotelType__c';
import HotelCity__c from '@salesforce/schema/Hotel__c.HotelCity__c';
import findHotels from '@salesforce/apex/HotelHome1.findHotels';
import { NavigationMixin } from 'lightning/navigation';
//import getHotels from '@salesforce/apex/LWCDataTableSortingExample.getHotels';
export default class Home extends NavigationMixin(LightningElement) {
    @track HotelTypevalue ='';
    @track HotelCityValue='';

    @track htype='';
    @track hcity='';

    @track columns = [

        {label: 'HotelDetails',
        type: 'button-icon',
        initialWidth: 75,
        typeAttributes: {
            iconName: 'action:preview',
            title: 'Preview',
            variant: 'border-filled',
            alternativeText: 'HotelDetails'
        }
      },
        { label: 'Id', fieldName: 'Id'},
        { label: 'Hotel Type', fieldName: 'HotelType__c' },
        { label: 'Hotel City', fieldName: 'HotelCity__c'},
        { label: 'Hotel State', fieldName: 'HotelState__c' },

        { label: 'Book Now',
        type: "button", typeAttributes: {  
             label: 'BookNow',  
             name: 'BookNow',  
             title: 'BookNow',  
             disabled: false,  
             value: 'BookNow',  
             iconPosition: 'left' ,
             onclick:'{handlerowselect}',
        }},
    ];
    handlerowselect(event)
    {
         this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                url:"https://ceptesbatch1-2022-developer-edition.ap27.force.com/HotelReservation/s/samplebooking" 
                  }
             });
     }

   // to get the default record type id, if you dont' have any recordtypes then it will get master
   @wire(getObjectInfo, { objectApiName:  Hotel__c  })

    Hotel__cMetadata;

    //  get the HotelType__c picklist values
   @wire(getPicklistValues,
        {
            recordTypeId: '$Hotel__cMetadata.data.defaultRecordTypeId', 
            fieldApiName: HotelType__c
        }
    )

    HotelType__cPicklist;
    //  get the HotelCity__c picklist values
    @wire(getPicklistValues,
        {
            recordTypeId: '$Hotel__cMetadata.data.defaultRecordTypeId', 
            fieldApiName: HotelCity__c
                   
        }
    )
  HotelCity__cPicklist;
 @wire(findHotels, {HotelTypevalue:'$htype',HotelCityValue:'$hcity'}) HotelInfo;
  // on select picklist value to show the selected value
   handle_HotelType_Change(event) {
    this.HotelTypevalue = event.detail.value;
     //event.preventDefault();
 }

    handle_HotelCity_Change(event) {
      this.HotelCityValue = event.detail.value;
      //event.preventDefault();
     }

      handle_Submit(event){
        this.htype=this.HotelTypevalue;
        this.hcity=this.HotelCityValue;

        event.preventDefault();
        // console.log('submit worked!!!');
        // let toggle = this.HotelTypevalue.visable;
        // this.HotelTypevalue({ visable: !toggle });


        // this[NavigationMixin.Navigate]({
        //     type: 'standard__webPage',
        //     attributes: {
        //           url:"https://ceptesbatch1-2022-developer-edition.ap27.force.com/HotelReservation/s/hotelsearchpage" 
                
        //     }
        // });
     }
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