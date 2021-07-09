function cnaVote(age){
	if (age >= 20){
		console.log('可以投票')
	} else {
		console.log('不能投票')
	}
}

cnaVote(40)	

攝氏 = 5 / 9 * (華氏 - 32)

function c2f(t) {
	return (t * 9 / 5 + 32)
}

console.log(c2f(85) + '度f')

function c2f(t) {
	console.log(t * 9 / 5 + 32)  
}

c2f(40)

console.log(typeof `${c2f(85)}`)