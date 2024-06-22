function isPalindrome(str){
     const reversed = str.split('').reversed().join('');
     return str === reversed;
}