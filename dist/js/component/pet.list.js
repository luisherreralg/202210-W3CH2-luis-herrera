import { PETS } from '../models/data.js';
import { Component } from './component.js';
export class PetList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.pets = PETS;
        this.template = this.createTemplateList();
        this.render(this.selector, this.template);
    }
    createTemplateList() {
        let template = ``;
        this.pets.forEach((item) => {
            template += `<li> ${item.id} - ${item.name}</li>`;
        });
        return template;
    }
}
