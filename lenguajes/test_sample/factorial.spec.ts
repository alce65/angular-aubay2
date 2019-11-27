import { factorial} from './factorial'
import { from } from 'rxjs';

describe('Calculo de un factorial', () => {
    
    it('should be 1 factorial de 0', () => {
        expect(factorial(0)).toEqual(1);
    });

    it('should be 1 factorial de 1', () => {
        expect(factorial(1)).toEqual(1);
    });

    it('should be 120 factorial de 5', () => {
        expect(factorial(5)).toEqual(120);
    });

});