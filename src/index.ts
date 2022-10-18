import { AddPet } from './component/add.pet.js';
import { Footer } from './component/footer.js';
import { Header } from './component/header.js';
import { Main } from './component/main.js';
import { PetList } from './component/pet.list.js';

new Header('body');
new Main('body');
new PetList('ul');
new Footer('body');
console.log('Loaded index.js');
