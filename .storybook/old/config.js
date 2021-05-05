import {configure, setAddon} from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import {loadFontAwesome} from '../../src/faLoader';

setAddon(JSXAddon);
const stories = require.context('../src', true, /\.stories\.(jsx|tsx)$/);

const loadStories = (req) => {
    return () => req.keys().forEach(req);
}
loadFontAwesome();
configure(loadStories(stories), module);