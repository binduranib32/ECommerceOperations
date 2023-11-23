import { LightningElement, wire,api,track} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationServiceDemo1 extends NavigationMixin(LightningElement) {
    @api recordId='0015j00000ZUIRXAA5';
    navigateToNewRecordPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        });
    }
    navigateToEditRecordPage(){
        console.log('Record Id ==> '+ this.recordId);
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                "recordId":this.recordId,
                "objectApiName":"Account",
                "actionName": "edit"
            }
        });
    }
    navigateToViewRecordPage(){
        console.log('Record Id ==> '+ this.recordId);
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                "recordId":this.recordId,
                "objectApiName":"Account",
                "actionName": "view"
            }
        });
    }
     // Navigation to Account List view(recent)
     navigateToAccountListView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            },
        });
    }
    // Navigation to Contact related list of account
    navigateToContactRelatedList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            },
        });
    }
    //Navigate to home page
    navigateToHomePage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            },
        });
    }
    // Navigation to contant object home page
    navigateToContactHome() {
        this[NavigationMixin.Navigate]({
            "type": "standard__objectPage",
            "attributes": {
                "objectApiName": "Contact",
                "actionName": "home"
            }
        });
    }
    //Navigate to chatter
    navigateToChatter() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            },
        });
    }
    //Navigate to Reports
    navigateToReports() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Report',
                actionName: 'home'
            },
        });
    }
}