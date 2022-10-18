import { Component } from './component.js';
export class Footer extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.generateTemplate();
        this.renderAdd(this.selector, this.template);
    }
    generateTemplate() {
        return `<footer>ISDI Pets</footer>`;
    }
}
