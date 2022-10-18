import { Component } from './component.js';
export class Main extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.generateTemplate();
        this.renderAdd(this.selector, this.template);
    }
    generateTemplate() {
        return `
    <main>
        <h2>Animales</h2>
        <ul>
        </ul>
        <slot class="pet-list"></slot>
    </main>
    `;
    }
}
