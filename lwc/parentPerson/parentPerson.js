import { LightningElement } from 'lwc';

export default class ParentPerson extends LightningElement {
    updateuser()
    {
         this.template.queryDecorator('c-person'.updateuser())
    }
}