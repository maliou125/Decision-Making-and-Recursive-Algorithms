function isPalindrome(str) {
    //to remove non-alphanumeric characters and convert to lowercase
    function cleanString(s) {
        return s.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    //  function to check if a string is a palindrome
    function checkPalindrome(s) {
        if (s.length <= 1) {
            return true;
        } else if (s[0] !== s[s.length - 1]) {
            return false;
        } else {
            return checkPalindrome(s.slice(1, -1));
        }
    }

  
    return checkPalindrome(cleanString(str));
}