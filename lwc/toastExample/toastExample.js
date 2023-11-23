import { LightningElement, track} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastExample extends LightningElement {
    handleClick() {
    const toastEvent = new ShowToastEvent({
      title: 'Success',
      message: 'Hi Keerthi... welcome!',
      variant: 'success'
    });
    this.dispatchEvent(toastEvent);
  }
}