import { LightningElement, track,api } from 'lwc';

export default class Person extends LightningElement {
      @api location;
        @track 
        user= {
            firstName: "Bindu",
            lastName: "B"
        };
       @api
        updateuser()
        {
            this.user.firstName="John";
            // this.user= {
            //     firstName:"Anusha",
            //     lastName:"K"

            // };
        }
    
    }