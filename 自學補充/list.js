var age = 20
var status = (age >= 18) ? '成人' : '小孩'
// var 變數 = (條件式) ? 結果1 : 結果2

if (age >= 18) {
	console.log('成人')
} else {
	console.log('小孩')
}

console.log(status)

var factorial = function fac(n) {return n<2 ? 1 : n*fac(n-1)};

console.log(factorial(3));

