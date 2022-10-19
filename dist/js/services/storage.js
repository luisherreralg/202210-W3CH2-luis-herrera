// localStorage.setItem();
// localStorage.getItem();
// Esta va a ser la clase padre donde vamos a almacenar datos
// Como no sabemos lo que vamos a almacenar le ponemos que esperamos una "T", que ya especificaremos que es
// También hacemos lo de la T para no poner en los Array<any> (no nos gustan los any)
export class Store {
    constructor(store = 'Pets') {
        this.store = store;
    }
    // En capsulamos los métodos de localStorage como servicios, para que sea más fácil acceder a ellos
    getStore() {
        // En el setter hemos hecho que lo que enviemos sea un string
        // Entonces cuando recibamos esos datos, los necesitamos desconvertir de ser un string usando el JSON.parse()
        const dataString = localStorage.getItem(this.store);
        // Con este if hacemos una programación defensiva para evitar problemas con los null
        if (!dataString)
            return [];
        return JSON.parse(dataString);
    }
    // Tenemos que convertir los datos coomo string, para eso usamos JSON.stringify(data)
    // Los datos con los que vamos a trabajar son arrays de objetos, por ese motivo, si no usamos el stringify, no funcionaría
    setStore(data) {
        localStorage.setItem(this.store, JSON.stringify(data));
    }
}
// Como antes le habíamos puesto la "T", cuando especificamos ahora el tipo de clase que queremos, se nos ajusta el contenido que espera
// De esta manera hemos creado un store genérico perfectamente tipado
// const store = new Store<Task>();
