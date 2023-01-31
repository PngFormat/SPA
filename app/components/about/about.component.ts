import { Component } from '../../component';
import { Observable } from '../../observable';



new Component().render({
    'path': 'about-component',
    'template': require('./about.component.html'),
    'style': require('./about.component.css')
})

export class AboutComponent {

    about: any = new Observable('about');

    constructor() {
        this.init();
    }

    init() {
        this.about.subscribe("About");
    }

}
new AboutComponent();