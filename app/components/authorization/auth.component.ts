import { Component } from '../../component'
import {Observable } from '../../observable'


new Component().render({
    'path': 'auth-component',
    'template': require('./auth.component.html'),
    'style': require('./auth.component.scss')
})

export class AuthComponent {

    auth : any = new Observable('auth');
    constructor() {
        this.auth.subscribe('authorization');
    }

}
new AuthComponent()