import { MaestroDatos } from './alumno.model'

export const TURNOS: Array<MaestroDatos> = [
    new MaestroDatos('M', 'Mañana', 'De 9:00 - 14:00' ),
    new MaestroDatos('T', 'Tarde', 'De 16:00 - 20:00'),
    new MaestroDatos('C', 'Completo','De 9:00 - 18:00' )
]

export const CURSOS: Array<MaestroDatos> = [
    new MaestroDatos('A001', 'Angular', 'Aprendiendo Angular 8 ...'),
    new MaestroDatos('R001', 'React', 'Aprendiendo React ...'),
    new MaestroDatos('V001', 'Vue', 'Aprendiendo Vue ...')
]