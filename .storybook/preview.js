import {loadFontAwesome} from '../src/faLoader';
const { addDecorator } = require('@storybook/react');
const { jsxDecorator } = require('storybook-addon-jsx');



loadFontAwesome();
addDecorator(jsxDecorator);