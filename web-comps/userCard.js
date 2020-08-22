// Adapted from: https://youtu.be/PCWaFLy3VUo

const template = document.createElement('template');
template.innerHTML = `
    <style>
        h3 {
            color: green;
        }
    </style>
    <div class="user-card">
        <h3>
        </h3>

        <button id="toggle-info">Hide Info</button>
    </div>
`;

class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        // this.innerHTML = `<h3>${this.getAttribute('name')}</h3>`;

        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    }

    connectedCallback() {
        this.shadowRoot.querySelector();
    }
}

// Define custom element
window.customElements.define('user-card', UserCard);