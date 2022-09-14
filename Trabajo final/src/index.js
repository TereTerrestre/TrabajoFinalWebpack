import _ from 'lodash';

import './style.css';
import Icon from './Gif.gif';
import Data from './data.csv';
import yaml from './data.yaml';
import json from './data.json5';
import './style.scss';

if ('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log("SW registrado", registration);
    }).catch(err => {
      console.log("SW no registrado", err);
    });
  });
}

 function component() {
   const element = document.createElement('div');

   element.innerHTML = _.join(['Hello', Data[0][1]], ' ');

  element.classList.add('background');
  const myIcon = new Image();

  myIcon.src = Icon;


  element.appendChild(myIcon);


  console.log(yaml.title); 
  console.log(json.owner.name); 
  console.log(Data);

   return element;
 }

 document.body.appendChild(component());
 document.body.classList.add('background');
