export class Pet {
  id: number;
  isAdopted: boolean;

  static idGenerator() {
    return Math.floor(Math.random() * 1000);
  }

  constructor(
    public name: string,
    public breed: string,
    public adoptiveFamily: string
  ) {
    this.id = Pet.idGenerator();
    this.isAdopted = false;
    this.adoptiveFamily;
  }

  adopted(adopterName: string) {
    this.adoptiveFamily = adopterName;
    return (this.isAdopted = true);
  }
}
