declare module globalThis {
    let routes: any;
}
declare module window {
    let location:any;
    let onhashchange:any;
    let active: any;
}
// render
import { Routes } from './routes';

// SINGLE PAGE APPLICATION'S ROUTES
export class Router {

    constructor() {
        globalThis.routes = Routes;
        // route change view
        var hashStores = [];
        if (hashStores.length == 0) {
            hashStores.push(window.location.hash)
            globalThis.routes.forEach((el:any) => {
                if (window.location.hash === '#' + el.path) {
                    this.changeView(el)
                }
            })
        }

        window.onhashchange = () => {
            hashStores.push(window.location.hash)
            globalThis.routes.forEach((el:any) => {
                if (window.location.hash === '#' + el.path) {
                    this.changeView(el)
                }
            })
        }

        window.active = this.active;
    }

    changeView(el:any) {
        var root = document.getElementById('root')
        var script = document.createElement('script');
        script.src = "../dist/" + el['path'] + ".js"
        root.appendChild(script)
    }

    active(e:any) {
        for (var i = 0; i < document.getElementsByClassName('nav-link').length; i++) {
            document.getElementsByClassName('nav-link')[i].classList.remove("active")
        }
        e.classList.add('active')
    }

}



new Router();

// select the open-btn button
let openBtn = document.getElementById('open-btn');
// select the modal-background
let modalBackground = document.getElementById('modal-background');
// select the close-btn
let closeBtn = document.getElementById('close-btn');

let closeBtn2 = document.getElementById('yes')

// shows the modal when the user clicks open-btn
openBtn.addEventListener('click', function() {
    modalBackground.style.display = 'block';
});

// hides the modal when the user clicks close-btn
closeBtn.addEventListener('click', function() {
    modalBackground.style.display = 'none';
});

closeBtn2.addEventListener('click', function() {
    modalBackground.style.display = 'none';
});


// hides the modal when the user clicks outside the modal
// windows.addEventListener('click', function(event: { target: HTMLElement; }) {
//     // check if the event happened on the modal-background
//     if (event.target === modalBackground) {
//         // hides the modal
//         modalBackground.style.display = 'none';
//     }
// });
