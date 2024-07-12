export class PalindromeChecker {

    private getReversedString(str: string): string {
        return str.split("").reverse().join("");
    }

    private stripSentenceSpaces(str: string): string {
        return str.split(" ").join("");
    }

    isPalindrome(str: string): boolean {
        const reversed = this.getReversedString(str);
        return this.stripSentenceSpaces(str).toLowerCase() === this.stripSentenceSpaces(reversed).toLowerCase(); 
    }
}