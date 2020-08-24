const template = document.createElement('template');
template.innerHTML = `
    <style>
        * {
            box-sizing: border-box;
        }
        .ThreeD-Container {
            perspective: 600px;
            height: 256px;
            width: 256px;
        }
        .Card {
            border: var(--debug-border-3);
            height: 100%;
            width: 100%;
            cursor: pointer;
            transform-style: preserve-3d;
        }
        .Card {
            position: relative;
            transition: 0.5s transform ease;
        }
        .ThreeD-Container:hover .Card{
            transform: rotateY(180deg);
        }
        .Card-Face {
            height: 100%;
            width: 100%;
            position: absolute;
            backface-visibility: hidden;
            border: solid black 1px;
        }
        .Image-Container {
            height: 100%;
            width: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        .Color-Overlay {
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.5);
            position: absolute;
        }
        .Image-Container > h4 {
            z-index: 1;
        }
        .Card-Face-Front {
            background: var(--background-6);
        }
        .Card-Face-Back {
            background: var(--background-7);
            transform: rotateY(180deg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
        }
        .Center {
            display: grid;
            place-items: center;
        }
        .card-container{
            width: fit-content;
            border: solid black 1px;
        }
        .card-title-container {
            height: 100px;
            width: 100%;
            border: solid black 1px;
        }
    </style>
    <div class="card-container">
        <div class="ThreeD-Container">
            <div class="Card">
                <div class="Card-Face Card-Face-Front">
                    <div class="Image-Container Center">                       


                      <web-comp-SVG></web-comp-SVG>  



                    
                    </div>
                </div> 
                <div class="Card-Face Card-Face-Back Center">
                </div>
            </div>
        </div>

        <div class="card-title-container Center">
            <div class="center-text">
                <h5>601 W Monroe St</h5>
                <h5>Purcell, OK 73080</h5>
            </div>
        </div>
    </div>
`;

class WebComp extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        const deep_copy = true; // include descendants
        this.shadowRoot.appendChild(template.content.cloneNode(deep_copy));

        // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');

        // this.innerHTML = ``;
    }
}

window.customElements.define('web-comp', WebComp);