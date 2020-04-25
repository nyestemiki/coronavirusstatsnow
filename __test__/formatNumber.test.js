import { formatNumber } from '../src/Utils/format';

describe('formatNumber Function', () => {
    // EXTREME CASES

    it('accepts null', () => {
        expect(formatNumber()).toEqual('');
    });

    it('accepts empty string', () => {
        expect(formatNumber('')).toEqual('');
    });

    it('accepts string', () => {
        expect(formatNumber("2")).toEqual('2');
    });

    it('accepts text', () => {
        expect(formatNumber("abc")).toEqual('abc');
    });

    it('accepts boolean values', () => {
        expect(formatNumber(true)).toEqual('true');
    });

    it('accepts objects', () => {
        expect(formatNumber({"a": 1})).toEqual('[object Object]');
    });

    it('accepts negative numbers', () => {
        expect(formatNumber(-2)).toEqual('-2');
    });

    it('accepts fractional numbers', () => {
        expect(formatNumber(2.2)).toEqual('2.2');
    });

    // NORMAL CASES

    it('accepts single digit numbers', () => {
        expect(formatNumber(2)).toEqual('2');
    });

    it('accepts dubble digit numbers', () => {
        expect(formatNumber(22)).toEqual('22');
    });

    it('accepts three-digit numbers', () => {
        expect(formatNumber(222)).toEqual('222');
    });

    it('accepts more than three-digit-numbers', () => {
        expect(formatNumber(2222)).toEqual('2,222');
    });

    it('accepts ten-digit-numbers', () => {
        expect(formatNumber(2222222222)).toEqual('2,222,222,222');
    });

    it('accepts fifteen-digit-numbers', () => {
        expect(formatNumber(222222222222222)).toEqual('222,222,222,222,222');
    });
});