import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { AddPet } from './add.pet.js';
import { Component } from './component.js';

export class PetList extends Component {
  template!: string;
  pets = [...PETS];

  constructor(public selector: string) {
    super();
    this.componentManager();
  }

  componentManager() {
    this.template = this.createTemplateList();
    this.render(this.selector, this.template);
    new AddPet('.pet-list');
    setTimeout(() => {
      document
        .querySelector('form')
        ?.addEventListener('submit', this.handleAdd.bind(this));
    }, 100);
  }

  createTemplateList() {
    let template = '';
    this.pets.forEach((item: Pet) => {
      template += `<li> ${item.id} - ${item.name} - ${item.breed}</li>`;
    });
    return template;
  }

  handleAdd(ev: Event) {
    ev.preventDefault();
    const namePet = (document.querySelector('#namePet') as HTMLInputElement)
      .value;
    const breed = (document.querySelector('#breed') as HTMLInputElement).value;
    this.pets.push(new Pet(namePet, breed, '---'));
    this.componentManager();
  }
}
