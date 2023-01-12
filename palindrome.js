function isPalindrome(x) {
    // your code here
    let reversed = x.split("").reverse().join("")
    
    return (x.toLowerCase() == reversed.toLowerCase() ? true : false)
  }

  console.log(isPalindrome('a'))