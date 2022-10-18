import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { Component } from './component.js';

export class PetList extends Component {
  template: string;
  pets = PETS;

  constructor(public selector: string) {
    super();
    this.template = this.createTemplateList();
    this.render(this.selector, this.template);
  }

  createTemplateList() {
    let template = ``;
    this.pets.forEach((item: Pet) => {
      template += `<li> ${item.id} - ${item.name}</li>`;
    });
    return template;
  }
}
