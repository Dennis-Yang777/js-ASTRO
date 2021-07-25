// Q1
// 請說明何謂「抽象類別」

// Q2
// let r = [[0, 1], [2, 3]].reduce(
// 	(acc, cur) => {
// 		return acc.concat(cur);
// 	},
// 	[1, 2],
// );
// // 1.  [1, 2, 0, 1] -> 新的acc
// // 2.  [1, 2, 0 , 1, 2, 3] -> return acc
// console.log(r);  // 會印出什麼？為什麼？
// [1, 2, 0 , 1, 2, 3]  
//   Q3

function getInfo(member, year) {
	// console.log(member === person)  //  true  確認是同一物件
	// console.log(year == birthYear)  //  true  確認是同值，但不同個體，值是copy來的
	member.name = 'Lydia';  // 同一物件變更內容  本體受到影響
	year = '1998'  // 不同個體改變自己的值
	console.log(year)  //  1998 可以被改變
}
const person = { name: 'Sarah'}; // {name: 'Lydia'}  本體就被改變了
const birthYear = '1997';  // '1997'  fun 裡面發生什麼事都不會改變外部本體

getInfo(person, birthYear);

console.log(person, birthYear); // 會印出什麼？為什麼？

// {name: 'Lydia'} 1997
// Q4
// function sayHi(name) {
// 	return `Hi there, ${name}`; //string   undefined
// }

// console.log(sayHi());  // 會印出什麼？為什麼？
// // Hi there, undefined


