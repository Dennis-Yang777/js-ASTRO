const lists = [2, 4, 1, 8, 7, 3, 5]

// 實作...

function greaterThan(x) {
	function select(i) {
		return i > x
	}
	return select
}



const result = lists.filter(greaterThan(4))
console.log(result)  // 印出 [ 8, 7, 5 ]

