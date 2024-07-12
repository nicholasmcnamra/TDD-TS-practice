import { PalindromeChecker } from "../palindromeChecker";

let palindromeChecker: PalindromeChecker;

beforeEach(() => {
    palindromeChecker = new PalindromeChecker();
})

describe('palindrome checker', () => {
    it('exists', () => {
        expect(palindromeChecker).toBeDefined();
    });

    it('should be able to tell that "mom" is a palindrome', () => {
        expect(palindromeChecker.isPalindrome('mom')).toBeTruthy();
    });

    it('should be able to tell that "bill" isnt a palindrome', () => {
        expect(palindromeChecker.isPalindrome('bill')).toBeFalsy();
    })

    it('should detect a palindrome regardless of casing', () => {
        expect(palindromeChecker.isPalindrome("Mom")).toBeTruthy();
    });

    it('should be able to tell"Was it a rat I saw" to be a palindrome', () => {
        expect(palindromeChecker.isPalindrome("Was it a rat I saw")).toBeTruthy();
    });

    it('should be able to tell"Never odd or even" to be a palindrome', () => {
        expect(palindromeChecker.isPalindrome("Never odd or even")).toBeTruthy();
    });
})