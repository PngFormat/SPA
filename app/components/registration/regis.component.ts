import { Component } from '../../component'
import {Observable } from '../../observable'


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