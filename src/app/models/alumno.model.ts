export class MaestroDatos {
    constructor(
        public id:  string = '',
        public nombre:  string = '',
        public descripcion: string = ''
    ) {}
}

export class AlumnoModel {
    constructor(
        public nombre: string = '',
        public apellidos: string = '',
        public dni: string = '',
        public passwd: string = '',
        public email: string = '',
        public coments: string = '',
        public nacim: Date = null,
        public isOk: boolean = false,
        public turno: MaestroDatos = null ,
        public curso: MaestroDatos = null,
    ) {}
}




