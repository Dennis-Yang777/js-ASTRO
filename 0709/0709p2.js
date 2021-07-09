var items = ['a', 'b', 'c', 'd', 'e']

for(var i = 0; i < 5; i = i + 1) {
	console.log(items[i])
}

for(var i = 1; i < 10; i = i + 1) {
	for(var j = 1; j < 10; j = j + 1) {
		console.log(i * j)
	}
}

// for(var i = 1; i <= 9; i = i + 1) {
// 	for(var j = 1; j <= 9; j = j + 1) {
// 		console.log(i + 'x' + j + '=' + i * j)
// 	}
// }

for(var i = 1; i <= 9; i++) {
	for(var j = 1; j <= 9; j++) {
		console.log(`${i} x ${j} = ${i * j}`)
	}
}

// odd
// for (var i = 1; i <= 10; i++) {
// 	if (i % 2 != 0){
// 		continue
// 	}
// 	console.log(i)
// }


for (var i = 1; i <= 10; i++) {
	if (i == 4 || i == 6){
		continue
	}
	console.log(i)
}

// for (var i = 1; i <= 10; i++) {
// 	if (i != 4 && i != 6){
// 		console.log(i)
// 	}
// }

let items = ['a', 'b', 'c', 'd', 'e', 'f']

for (let i = 0; i < items.length; i++) {
	console.log(items[i])
}