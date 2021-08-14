// // 找到所有的因數但不包含1，如果是質數回傳is prime

// function divisors(integer) {
// 	var res = []
// 	for (var i = 2; i <= Math.floor(integer / 2); ++i) {
// 		if (integer % i == 0) res.push(i);
// 		return res.length ? res : integer + ' is prime'
// 	}
// };

// 找出全字母句
// function isPangram(string){
// 	string = string.toLowerCase();
// 	return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
// 		return string.indexOf(x) !== -1;
// 	});
// }

// 找到每個名字各出現幾次
// var data = ['car', 'bike', 'car', 'walk', 'walk']

// const transportation = data.reduce((obj, item) => {
// 	if(!obj[item]) {
// 		obj[item] = 0
// 	}
// 	obj[item]++
// 	return obj
// }, {})

// console.log(transportation);

// 把 m * n 大小的板塊切成 1 * 1 的大小要幾刀
// function breakChocolate(n,m) {
// 	return (n * m > 0) ? n * m - 1 : 0 
// }

// breakChocolate(3,6)

// 找到唯一奇數或偶數
// var arr = [2, 4, 0, 100, 4, 11, 2602, 36]

// function findOutlier(integers){
// 	var even = []
// 	var odd = []
// 	arr.forEach((e) => {
// 		if (e % 2 === 0) {
// 			even.push(e)
// 		} else {
// 			odd.push(e)
// 		}
// 	})
// 	return (even.length > odd.length) ? odd[0] : even[0]
// }

// var a = findOutlier(arr)

// 找到相符合的字串並列出
// a1 = ["arp", "live", "strong"]
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// function inArray(array1,array2) {
// 	return array1
// 		.filter(e => array2.find(i => i.match(e)))
// 		.sort()
// }

// inArray(a1,a2)

// 找出完全平方數的下一個平方
function findNextSquare(sq) {
	var sqr = Math.sqrt(sq)
	return (Math.round(sqr) ** 2 === sq) ? (sqr + 1) ** 2 : -1
}
findNextSquare(114)






