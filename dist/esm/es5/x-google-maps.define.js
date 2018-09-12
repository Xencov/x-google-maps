// XGoogleMaps: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './x-google-maps.core.js';
import {
  MyComponent
} from './x-google-maps.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    MyComponent
  ], opts);
}