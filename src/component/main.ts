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
        <h2>Animales</h2>
        <ul>
          <slot class="pet-list"></slot>
        </ul>
    </main>
    `;
  }
}
