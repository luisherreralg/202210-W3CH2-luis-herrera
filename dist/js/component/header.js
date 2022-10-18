import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.generateTemplate();
        this.renderAdd(this.selector, this.template);
    }
    generateTemplate() {
        return `<header><h1>MASCOTAS</h1></header>`;
    }
}
