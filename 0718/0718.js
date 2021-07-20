// -------------------
// Q1
// -------------------
for (let i = 1; i < 5; i++) {
	if (i === 3) continue;
	console.log(i);
}
  
// 上面這個迴圈會印出什麼？為什麼？
// 1 2 4
// -------------------
// Q2
// -------------------
function sayHi() {
	return (() => 0)();
	// return 0
}

console.log(typeof sayHi());  // 會印出什麼？為什麼？
// number
// IIFE

// -------------------
// Q3
// -------------------
// var y = 10

(() => {
	let x = (y = 10);

	// y = 10
	// let x = y  
})();

// console.log(x)  // not defined
// console.log(y)  // 10
console.log(typeof x);    // 會印出什麼？為什麼？
console.log(typeof y);    // 會印出什麼？為什麼？
// undefined
// number