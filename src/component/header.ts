import { Component } from './component.js';

export class Header extends Component {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.generateTemplate();
    this.renderAdd(this.selector, this.template);
  }

  generateTemplate() {
    return `<header><h1>MASCOTAS</h1></header>`;
  }
}
