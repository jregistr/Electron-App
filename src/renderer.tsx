import ReactDOM = require('react-dom');

import { TimerApp } from './components/timer-app';
import * as React from "react";

require('css-modules-require-hook')({
   processCss : css => {
       const style = document.createElement('style');
       style.innerHTML = css;
       document.head.appendChild(style);
   }
});

console.log("HI");

ReactDOM.render(<TimerApp/>, document.querySelector('main'));
