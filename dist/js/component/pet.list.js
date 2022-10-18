import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { AddPet } from './add.pet.js';
import { Component } from './component.js';
export class PetList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.pets = [...PETS];
        this.componentManager();
    }
    componentManager() {
        this.template = this.createTemplateList();
        this.render(this.selector, this.template);
        new AddPet('.pet-list');
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this.handleAdd.bind(this));
        }, 100);
    }
    createTemplateList() {
        let template = '';
        this.pets.forEach((item) => {
            template += `<li> ${item.id} - ${item.name} - ${item.breed}</li>`;
        });
        return template;
    }
    handleAdd(ev) {
        ev.preventDefault();
        const namePet = document.querySelector('#namePet')
            .value;
        const breed = document.querySelector('#breed').value;
        this.pets.push(new Pet(namePet, breed, '---'));
        this.componentManager();
    }
}
