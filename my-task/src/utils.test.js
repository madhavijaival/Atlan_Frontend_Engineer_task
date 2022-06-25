import { capitalize, getTableNameFromSQLQuery } from './utils';

describe('capitalize', () => {
    it('Should be able to handle input of all UPPERCASE', () => {
        expect(capitalize('KARTHIC')).toEqual('Karthic');
    });
    it('Should be able to handle input of all lowercase', () => {
        expect(capitalize('karthic')).toEqual('Karthic');
    });
    it('Should be able to handle input of aLtErNaTiNg cApS', () => {
        expect(capitalize('KaRtHiC')).toEqual('Karthic');
    });
});


describe('getTableNameFromSQLQuery', () => {
    it('Should be able to handle input of all UPPERCASE', () => {
        expect(getTableNameFromSQLQuery('SELECT * FROM CUSTOMERS')).toEqual('customers');
    });
    it('Should be able to handle input of all lowercase', () => {
        expect(getTableNameFromSQLQuery('Select * from customers')).toEqual('customers');
    });
    it('Should be able to handle semicolon at end of statement', () => {
        expect(getTableNameFromSQLQuery('select * from customers')).toEqual('customers');
    });
});