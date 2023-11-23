import { LightningElement,track,wire,api } from 'lwc';
//  import ListofHotels from '@salesforce/apex/HotelHome.ListofHotels';
//  import findHotels from '@salesforce/apex/HotelHome1.findHotels';

//    let i=0;


export default class HotelHomePage extends LightningElement {
    // @api HotelType_Ref;
    // @api HotelCity_Ref;
    // //container = {};//for handling multiple combobox

    // @track items = []; //this will hold key, value pair
    // @track itemcity=[];
    // @track value = ''; //initialize combo box value


    // @track chosenValue = '';

    // @wire(ListofHotels)
   

    // wiredUserRoles({ error, data }) {
    //     if (data) {

    //         //create array with elements which has been retrieved controller
    //         //here value will be Id and label of combobox will be Name
    //         for(i=0; i<data.length; i++)  {
    //             this.items = [...this.items ,{value: data[i].Id , label: data[i].HotelType__c} ];                                   
    //         }   
    //         for(i=0; i<data.length; i++)  {
    //             this.itemcity = [...this.itemcity ,{value: data[i].Id , label: data[i].HotelCity__c} ];                                   
    //         }        
    //         this.error = undefined;
    //     } else if (error) {
    //         this.error = error;
    //         this.Hotel__c= undefined;
    //     }
    // }

    // //gettter to return items which is mapped with options attribute
    // get roleOptions() {
    //     return this.items;
    // }

    // get roleOptions1() {
    //     return this.itemcity;
    // }
    // @wire(findHotels,{HotelType:'$HotelType',HotelCity:'$HotelCity'})
    // Hotel__c;
    // searchhotel(event){
        
    // }
    //    handle_HotelType_Change(event) {
    //     this.HotelType_Ref = event.detail.label;
    //     } 
    //     handle_HotelCity_Change(event) {
    //     this.HotelCity_Ref = event.detail.label;
    //     }

        // handle_Submit(event){
        //     HotelHome({ 
        //        HotelType  : this.HotelType_Ref, 
        //        HotelCity : this.HotelCity_Ref
        //     })
        //     .then(result => {
        //         const event = new ShowToastEvent({
        //             title: 'Contact created',
        //             message: 'New Contact '+ this.HotelType_Ref +' '+ this.HotelCity_Ref +' created.',
        //             variant: 'success'
        //         });
        //         this.dispatchEvent(event);
        //     })
        //     .catch(error => {
        //         const event = new ShowToastEvent({
        //             title : 'Error',
        //             message : 'Error creating contact. Please Contact System Admin',
        //             variant : 'error'
        //         });
        //         this.dispatchEvent(event);
        //     });
        // }
        // Get the string of the "value" attribute on the selected option
        // const selectedOption = event.detail.value;
        // console.log('selected value=' + selectedOption);
        // this.chosenValue = selectedOption;
        // const hoteltype1 = event.detail.label;
        //  this.HotelType=hoteltype1;
        //this.container[event.target.name] = event.detail.HotelType;

    }
    
    //this value will be shown as selected value of combobox item
    // get selectedValue(){
    //     return this.chosenValue;
    // }