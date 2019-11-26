export class TareaModel {
    constructor(
        public nombre : string = '',
        public isCompleted : boolean = false
    ) {}
}

/*  Otra opción sería

export interface TareaIf {
    nombre : string
    isCompleted : boolean
} */
