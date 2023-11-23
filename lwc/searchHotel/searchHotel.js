import { LightningElement,wire,track,api } from 'lwc';
import findHotels from '@salesforce/apex/HotelHome1.findHotels';
import { NavigationMixin } from 'lightning/navigation';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Hotel__c from '@salesforce/schema/Hotel__c';
import HotelType__c from '@salesforce/schema/Hotel__c.HotelType__c';
import HotelCity__c from '@salesforce/schema/Hotel__c.HotelCity__c';
export default class SearchHotel extends LightningElement {

    @track HotelTypevalue ='';
    @track HotelCityValue='';

    @track htype='City Hotel';
    @track hcity='Chennai';

    @wire(findHotels, {HotelTypevalue:'$htype',HotelCityValue:'$hcity'}) HotelInfo;
        
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
      { label: 'Id', fieldName: 'Id__c'},
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
                url:"https://ceptesbatch1-22-developer-edition.ap27.force.com/onlineairlinereservation/s/bookingflights" 
                  
                
                    
                }
             });
        
  
    }

}