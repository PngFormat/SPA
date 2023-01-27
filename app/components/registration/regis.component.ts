import { Component } from '../../component'
import {Observable } from '../../observable'

const el = document.createElement('div');

el.textContent = 'bobbyhadz.com';


el.setAttribute('title', 'my-title');


const box = document.getElementById('box');

box?.appendChild(el);

new Component().render({
    'path': 'regis-component',
    'template': require('./regis.component.html'),
    'style': require('./regis.component.css')
})

export class RegisComponent {

    regis : any = new Observable('regis');
    constructor() {
        this.regis.subscribe('@gmail.com');
    }

}

new RegisComponent()