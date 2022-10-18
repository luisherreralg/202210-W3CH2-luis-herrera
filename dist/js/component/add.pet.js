import { Component } from './component.js';
export class AddPet extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.generateTemplate();
        this.renderOuter(this.selector, this.template);
    }
    generateTemplate() {
        return `
    <form>
      <div>
        <input
          type="text"
          name="namePet"
          id="namePet"
          placeholder="Nombre de la mascota"
          required
          autocomplete="off"
        />
      </div>
      <div>
        <input type="text" name="breed" id="breed" placeholder="Raza" required autocomplete="off"/>
      </div>
      <button type="submit">Enviar</button>
    </form>`;
    }
}
