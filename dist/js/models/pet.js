export class Pet {
    constructor(name, breed, adoptiveFamily) {
        this.name = name;
        this.breed = breed;
        this.adoptiveFamily = adoptiveFamily;
        this.id = Pet.idGenerator();
        this.isAdopted = false;
    }
    static idGenerator() {
        return Math.floor(Math.random() * 1000);
    }
}
