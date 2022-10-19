import { Component } from './component.js';

export class Main extends Component {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.generateTemplate();
    this.renderAdd(this.selector, this.template);
  }

  generateTemplate() {
    return `
    <main>
    </main>
    `;
  }
}
