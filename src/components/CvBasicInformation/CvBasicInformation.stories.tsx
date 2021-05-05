import React from 'react';

import { BasicInformation } from './CvBasicInformation';
import { IContact, ICvBasicInformation } from '../../types/cpTypes';



const basicInfo: ICvBasicInformation = {
    firstName: 'John',
    lastName: 'Doe',
    civility: 'Mr.',
    nationality: 'Senegalese',
    address: 'Hamster Street, Djoudj\' parc',
    contacts: [],
    photoUrl: ''
}

const email: IContact = {
    type: 'email',
    contact: 'never.send@noneland.com'
}

const phone: IContact = {
    type: 'phone',
    contact: '+221 77 865 00 00'
}
export const withoutContacts = () => <BasicInformation {...basicInfo} />;
export const withEmail = () => <BasicInformation {...basicInfo} contacts={[email]}/>;
export const withPhone = () => <BasicInformation {...basicInfo} contacts={[phone]}/>;
export const withPhoneAndEmail = () => <BasicInformation {...basicInfo} contacts={[email, phone]}/>;


const title = { title: 'Basic information' };

export default title;
