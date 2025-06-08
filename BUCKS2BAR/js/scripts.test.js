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