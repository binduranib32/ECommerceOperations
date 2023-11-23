import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/PlatformShowToastEvent';

export default class ToastMessageDemo1 extends LightningElement {
    showErrorToast()
    {
        const evt=new ShowToastEvent({
        title:'toast error',//properties
        message:'Some Unexpected Error',
        variant:'error',//Logo
        mode:'dismissable'
        });
        this.dispatchEvent(evt);
    }

    showSuccessToast()
    {
        const evt=new ShowToastEvent({
        title:'toast success',//properties
        message:'Operation Successfull...',
        variant:'success',//Logo
        mode:'dismissable'
        });
        this.dispatchEvent(evt);
    }

    showWarningToast()
    {
        const evt=new ShowToastEvent({
        title:'toast warning',//properties
        message:'Some Problem',
        variant:'warning',//Logo
        mode:'dismissable'
        });
        this.dispatchEvent(evt);
    }

    showInfoToast()
    {
        const evt=new ShowToastEvent({
        title:'toast Info...',//properties
        message:'Operation will Run in Background',
        variant:'info',//Logo
        mode:'dismissable'
        });
        this.dispatchEvent(evt);
    }
}