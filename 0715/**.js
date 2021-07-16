// 檢查傳入的引數是否為某數的平方

// function isSquare(num) {
//   return Math.sqrt(num) ** 2 === num
// }

// console.log(isSquare(0))   // 印出 true
// console.log(isSquare(4))   // 印出 true
// console.log(isSquare(5))   // 印出 false
// console.log(isSquare(25))  // 印出 true
// console.log(isSquare(26))  // 印出 false


// Math.sqrt(x)	
// 回傳Ｘ的正平方根

// ////////////////////////////////////////

// function printStars(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log("*".repeat(i))
//   }
// }


// printStars(6)

// *
// **
// ***
// ****
// *****
// ******



// "a".repeat(5)  
// a 字串內容複製五次成一個字串


function printStars(n) {
  for (let i = 1; i <= n; i++) {
  console.log(' '.repeat(n - i) + '*'.repeat(i))
  }
}

printStars(1)
printStars(3)
printStars(6)
printStars(12)

//      *
//     **
//    ***
//   ****
//  *****
// ******
