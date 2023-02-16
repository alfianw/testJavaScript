// Palindrome

// Diberikan sebuah function palindrome(kata) yang menerima satu parameter. 
// Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. 
// Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.

function palindrome(kata) {
  // you can only write your code here!
  let balikan = "";

  for(let i = kata.length -1; i >= 0; i--){
    balikan += kata[i]
  }

  if(kata === balikan){
    console.log("true")
  } else if(kata !== balikan){
    console.log("false")
  }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false