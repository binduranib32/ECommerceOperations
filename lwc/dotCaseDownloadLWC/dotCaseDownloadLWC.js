import { LightningElement } from 'lwc';
import generateCSV from '@salesforce/apex/DotCaseExportController.generateDotCaseCSV';

export default class DotCaseDownloadLWC extends LightningElement {
    downloadCSV() {
        generateCSV()
            .then(result => {
                if (result) {
                    const csvData = result;
                    const blob = new Blob([csvData], { type: 'text/csv' });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'DotCaseData.csv';
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                } else {
                    this.showToast('Error', 'No data to download.', 'error');
                }
            })
            .catch(error => {
                this.showToast('Error', 'An error occurred while generating the CSV.', 'error');
            });
    }

    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }
}

