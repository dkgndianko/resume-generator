import React from 'react';

import { storiesOf } from '@storybook/react';

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


storiesOf('Basic information', module)
.add('without contacts', () => (
    <BasicInformation {...basicInfo} />
))
.add('with email', () => (
    <BasicInformation {...{...basicInfo, contacts: [email]} } />
))
.add('with phone', () => (
    <BasicInformation {...{...basicInfo, contacts: [phone]}} />
))
.add('with email and phone', () => (
    <BasicInformation {...{...basicInfo, contacts: [phone, email]}} />
));