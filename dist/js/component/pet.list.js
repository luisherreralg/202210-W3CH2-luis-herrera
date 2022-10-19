import { PETS } from '../models/data.js';
import { Pet } from '../models/pet.js';
import { Store } from '../services/storage.js';
import { AddPet } from './add.pet.js';
import { Component } from './component.js';
import { ItemPets } from './item.pet.js';
export class PetList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        // En esta parte del código es donde vamos a gestionar nuestro almacenamienmto de datos en local
        // Primero le damos un valor a la propiedad storeService generando un nuevo Store
        this.storeService = new Store('Pets');
        // Si no tenemos nada a lo que hacerle get, entonces primero hacemos el setStore
        if (this.storeService.getStore().length === 0) {
            // Declaramos a la propiedad pets una copia del array donde guardamos la data
            this.pets = [...PETS];
            // Seteamos el nuevo almacen con la data de pets
            this.storeService.setStore(this.pets);
        }
        else {
            // Si no tenemos nada que setea, entonces hacemos get de la info guardada en local
            this.pets = this.storeService.getStore();
        }
        this.componentManager();
    }
    componentManager() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddPet('slot#add-pet', this.handleAdd.bind(this));
    }
    createTemplate() {
        let template = `<section>
                <h2>Animales</h2>
                <ul>`;
        this.pets.forEach((item) => {
            template += new ItemPets('', item, this.handlerEraser.bind(this), this.handlerComplete.bind(this)).template;
        });
        template += `</ul>
            <slot id="add-pet"></slot>
            </section>`;
        return template;
    }
    handleAdd(ev) {
        const namePet = document.querySelector('#namePet')
            .value;
        const breed = document.querySelector('#breed').value;
        this.pets.push(new Pet(namePet, breed, '---'));
        this.componentManager();
    }
    handlerEraser(deletedID) {
        this.pets = this.pets.filter((item) => item.id !== deletedID);
        this.storeService.setStore(this.pets);
        this.componentManager();
    }
    handlerComplete(changeID) {
        const i = this.pets.findIndex((item) => item.id === changeID);
        this.pets[i].isAdopted = !this.pets[i].isAdopted;
        this.storeService.setStore(this.pets);
    }
}
