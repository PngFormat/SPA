import { Component } from '../../component'
import {Observable } from '../../observable'


new Component().render({
    'path': 'auth-component',
    'template': require('./auth.component.html'),
    // 'style': require('./auth.component.scss')
})

export class AuthComponent {

    validateAuth(auth: any) {
        if (auth != 1) {

        } else {
            document.querySelector("body").style.display = "block";
        }
    }
    logOut() {
        localStorage.removeItem("auth");

    }

    auth : any = new Observable('auth');
    constructor() {
        this.auth.subscribe('authorization');
        // document.querySelector("body").style.display = "none";
        // const auth = localStorage.getItem("auth");
        // this.validateAuth(auth);

    }



}
new AuthComponent()