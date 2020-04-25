import { formatDate } from '../src/Utils/format';

describe('formatDate Function', () => {
    it('does not put 0 before single-digit hour', () => {
        expect(formatDate(new Date('1995-12-17T03:24:00')))
            .toEqual('12/17/1995 3:24');
    });

    it('single-digit month and day', () => {
        expect(formatDate(new Date('2000-01-01T15:12:10')))
            .toEqual('1/1/2000 15:12');
    });

    it('puts a 0 for single-digit minutes', () => {
        expect(formatDate(new Date('2005-12-17T03:05:00')))
            .toEqual('12/17/2005 3:05');
    });
});