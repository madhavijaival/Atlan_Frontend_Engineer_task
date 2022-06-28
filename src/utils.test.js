import { capitalize, getTableNameFromSQLQuery } from './utils';

describe('capitalize', () => {
    it('Should be able to handle input of all UPPERCASE', () => {
        expect(capitalize('MADHAVI')).toEqual('madhavi');
    });
    it('Should be able to handle input of all lowercase', () => {
        expect(capitalize('MADHAVI')).toEqual('madhavi');
    });
    it('Should be able to handle input of aLtErNaTiNg cApS', () => {
        expect(capitalize('MADHAVI')).toEqual('madhavi');
    });
});


describe('getTableNameFromSQLQuery', () => {
    it('Should be able to handle input of all UPPERCASE', () => {
        expect(getTableNameFromSQLQuery('SELECT * FROM EMPLOYEES')).toEqual('employees');
    });
    it('Should be able to handle input of all lowercase', () => {
        expect(getTableNameFromSQLQuery('Select * from employees')).toEqual('employees');
    });
    it('Should be able to handle semicolon at end of statement', () => {
        expect(getTableNameFromSQLQuery('select * from employees')).toEqual('employees');
    });
    it('Should be able to handle input of all UPPERCASE', () => {
        expect(getTableNameFromSQLQuery('SELECT employeeID FROM EMPLOYEES')).toEqual('employees');
    });
    it('Should be able to handle input of all lowercase', () => {
        expect(getTableNameFromSQLQuery('Select employeeID from employees')).toEqual('employees');
    });
    it('Should be able to handle semicolon at end of statement', () => {
        expect(getTableNameFromSQLQuery('select employeeID from employees')).toEqual('employees');
    });
});