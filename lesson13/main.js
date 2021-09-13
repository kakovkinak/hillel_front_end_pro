function isPalindrome (string) {
    if (string !== '' && string === string.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}