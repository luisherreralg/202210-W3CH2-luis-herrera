import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { Store } from '../services/storage.js';
import { AddPet } from './add.pet.js';
import { Component } from './component.js';
export class PetList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.componentManager();
        this.storeService = new Store('Pets');
        if (this.storeService.getStore().length === 0) {
            this.pets = [...PETS];
            this.storeService.setStore(this.pets);
        }
        else {
            this.pets = this.storeService.getStore();
        }
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
        document
            .querySelectorAll('.eraser')
            .forEach((item) => item.addEventListener('click', this.handlerEraser.bind(this)));
    }
    createTemplateList() {
        let template = '';
        this.pets.forEach((item) => {
            template += `<li> ${item.id} - ${item.name} - ${item.breed}
      <span class="eraser" data-id="${item.id}">❌</span>
      </li>`;
        });
        return template;
    }
    handleAdd(ev) {
        ev.preventDefault();
        const namePet = document.querySelector('#namePet')
            .value;
        const breed = document.querySelector('#breed').value;
        this.pets.push(new Pet(namePet, breed, '---'));
        console.log(this.pets);
        this.componentManager();
        return false;
    }
    handlerEraser(ev) {
        const deletedID = ev.target.dataset.id;
        this.pets = this.pets.filter((item) => item.id !== +deletedID);
        this.componentManager();
    }
}
