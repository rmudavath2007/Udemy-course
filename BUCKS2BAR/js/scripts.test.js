// filepath: c:\Udemy course\BUCKS2BAR\js\scripts.test.js

describe('Username Validation Regex', () => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    test('should pass for a valid username', () => {
        const validUsername = 'A1@bcdef';
        expect(regex.test(validUsername)).toBe(true);
    });

    test('should fail if username is less than 8 characters', () => {
        const shortUsername = 'A1@bcd';
        expect(regex.test(shortUsername)).toBe(false);
    });

    test('should fail if username does not contain an uppercase letter', () => {
        const noUppercase = '1@abcdef';
        expect(regex.test(noUppercase)).toBe(false);
    });

    test('should fail if username does not contain a digit', () => {
        const noDigit = 'A@abcdef';
        expect(regex.test(noDigit)).toBe(false);
    });

    test('should fail if username does not contain a special character', () => {
        const noSpecialChar = 'A1abcdef';
        expect(regex.test(noSpecialChar)).toBe(false);
    });

    test('should fail if username contains invalid characters', () => {
        const invalidChars = 'A1@abcde# ';
        expect(regex.test(invalidChars)).toBe(false);
    });
});

describe('Chart Data Retrieval', () => {
    document.body.innerHTML = `
        <input id="income-jan" value="1000" />
        <input id="income-feb" value="2000" />
        <input id="income-mar" value="3000" />
        <input id="income-apr" value="4000" />
        <input id="income-may" value="5000" />
        <input id="income-jun" value="6000" />
        <input id="income-jul" value="7000" />
        <input id="income-aug" value="8000" />
        <input id="income-sep" value="9000" />
        <input id="income-oct" value="10000" />
        <input id="income-nov" value="11000" />
        <input id="income-dec" value="12000" />
        <input id="expenses-jan" value="500" />
        <input id="expenses-feb" value="1000" />
        <input id="expenses-mar" value="1500" />
        <input id="expenses-apr" value="2000" />
        <input id="expenses-may" value="2500" />
        <input id="expenses-jun" value="3000" />
        <input id="expenses-jul" value="3500" />
        <input id="expenses-aug" value="4000" />
        <input id="expenses-sep" value="4500" />
        <input id="expenses-oct" value="5000" />
        <input id="expenses-nov" value="5500" />
        <input id="expenses-dec" value="6000" />
    `;

    const getValue = (id) => parseFloat(document.getElementById(id).value) || 0;

    test('should retrieve correct income data', () => {
        const incomeData = [
            getValue('income-jan'), getValue('income-feb'), getValue('income-mar'),
            getValue('income-apr'), getValue('income-may'), getValue('income-jun'),
            getValue('income-jul'), getValue('income-aug'), getValue('income-sep'),
            getValue('income-oct'), getValue('income-nov'), getValue('income-dec')
        ];

        expect(incomeData).toEqual([
            1000, 2000, 3000, 4000, 5000, 6000,
            7000, 8000, 9000, 10000, 11000, 12000
        ]);
    });

    test('should retrieve correct expense data', () => {
        const expenseData = [
            getValue('expenses-jan'), getValue('expenses-feb'), getValue('expenses-mar'),
            getValue('expenses-apr'), getValue('expenses-may'), getValue('expenses-jun'),
            getValue('expenses-jul'), getValue('expenses-aug'), getValue('expenses-sep'),
            getValue('expenses-oct'), getValue('expenses-nov'), getValue('expenses-dec')
        ];

        expect(expenseData).toEqual([
            500, 1000, 1500, 2000, 2500, 3000,
            3500, 4000, 4500, 5000, 5500, 6000
        ]);
    });
});