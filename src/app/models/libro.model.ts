export class LibroModel {
    constructor(
        public id: number | string = null,
        public autores: Array<string> = [],
        public titulo:  string = '', 
    ) {}
}
