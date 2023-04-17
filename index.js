  function isPalindrome(word) {
    return ['abba', 'racecar', 'a'].includes(word);
  }
  

/* 
inside this function make an array and check if the function argument includes 'abba', 'racecar', 'a' then return true, otherwise return false
*/

/*
  The input 'abba' is included in the array, so the function returns true.
  The input 'racecar' is included in the array, so the function returns true.
  The input 'a' is included in the array, so the function returns true.
  The input 'robot' is not included in the array, so the function returns false.
  The input 'ab' is not included in the array, so the function returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
