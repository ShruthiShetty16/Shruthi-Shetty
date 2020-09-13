import { LightningElement, track, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import Account_Name from '@salesforce/schema/Account.Name';
import Number_Of_Employees from '@salesforce/schema/Account.NumberOfEmployees';
import My_Field from '@salesforce/schema/Account.My_Field__c';
import Phone from '@salesforce/schema/Account.Phone';
import Billing_Address from '@salesforce/schema/Account.BillingAddress';



export default class CongaTest extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields })
    account;

    get name() {
        return getFieldValue(this.account.data, Account_Name);
    }

    get employees() {
        return getFieldValue(this.account.data, Number_Of_Employees);
    }

    get field() {
        return getFieldValue(this.account.data, My_Field);
    }

    get phone() {
        return getFieldValue(this.account.data, Phone);
    }

    get billingaddress() {
        return getFieldValue(this.account.data, Billing_Address);
    }
}
