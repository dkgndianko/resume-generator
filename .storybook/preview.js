import {loadFontAwesome} from '../src/faLoader';
const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');
// import knobs from '@storybook/addon-knobs';



loadFontAwesome();
addDecorator(jsxDecorator);
// addDecorator(knobs);