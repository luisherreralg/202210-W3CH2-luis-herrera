import { Component } from './component.js';
export class AddPet extends Component {
    constructor(selector, handle) {
        super();
        this.selector = selector;
        this.handle = handle;
        this.template = this.generateTemplate();
        this.renderOuter(this.selector, this.template);
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (ev) => {
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
