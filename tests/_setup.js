import { JSDOM } from 'jsdom';

const { window, document } = new JSDOM('');

global.window = window;
global.document = document;
