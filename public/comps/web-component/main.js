const template = document.createElement('template');
template.innerHTML = `
    <style>
        h3: {
            color: green;
        }
    </style>

    <h3>Josh</h3>
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