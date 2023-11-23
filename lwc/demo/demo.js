import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import demoStyles from './demo.css';

export default class Demo extends LightningElement {
    selectedValue;
  options = [
    { label: 'Contact', value: 'contact' },
    { label: 'Ads', value: 'ads' },
    { label: 'Calender', value: 'calender' },
  ];

  //handleButtonClick() {
  
    // const event = new ShowToastEvent({
    //   title: 'Success!',
    //   message: 'You Selected Contatc.',
    //   variant: 'success'
    // });
    // this.dispatchEvent(event); 

    handleChange(event) {
      this.selectedValue = event.detail.value;
      if (this.selectedValue === 'contact') {
        const event = new ShowToastEvent({
          title: 'Contact Selected',
          message: 'You selected Contact!',
          variant: 'success',
        });
        this.dispatchEvent(event);
      } else if (this.selectedValue === 'ads') {
        const event = new ShowToastEvent({
          title: 'Ads Selected',
          message: 'You selected Ads!',
          variant: 'success',
        });
        this.dispatchEvent(event);
      } else if (this.selectedValue === 'calender') {
        const event = new ShowToastEvent({
          title: 'Calender Selected',
          message: 'You selected Calender!',
          variant: 'success',
        });
        this.dispatchEvent(event);
      }
  }
}