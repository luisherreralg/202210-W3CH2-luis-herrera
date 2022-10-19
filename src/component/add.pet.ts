import { Component } from './component.js';

export class AddPet extends Component {
  template: string;
  constructor(public selector: string, public handle: (ev: Event) => void) {
    super();
    this.template = this.generateTemplate();
    this.renderOuter(this.selector, this.template);
    setTimeout(() => {
      document
        .querySelector('form')
        ?.addEventListener('submit', (ev: Event) => {
          ev.preventDefault();
          handle(ev);
        });
    }, 100);
  }

  generateTemplate() {
    return `
        <form>
            <div>
                <input type="text" id="title" placeholder="Nombre del animal" autocomplete="off" required>
            </div>
            <div>
                <input type="text" id="breed" placeholder="Raza" autocomplete="off" required>
            </div>
            <button type="submit">Guardar</button>
        </form>
        `;
  }
}
