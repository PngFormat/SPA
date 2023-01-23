import { Component } from '../../component'
import {Observable } from '../../observable'

export function validateForm() {
    // @ts-ignore
    var x = document.forms["myForm"]["username"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}

// 👇️ const input: HTMLInputElement | null
const input = document.getElementById('username') as HTMLInputElement | null;

const value = input?.value;
console.log(value) // 👉️ "Initial value"

if (input != null) {
    console.log(input.value); // 👉️ "Initial value"
}

input?.addEventListener('input', function (event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
});
// input?.addEventListener('input', function (event) {
//         const target = event.target as HTMLInputElement;
//         console.log(target.value);
// });


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