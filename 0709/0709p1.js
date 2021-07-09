let array1 = ['a', 12, [1,2,3], {name:'DD', age:18}]


let items = ['a', 7, 'c', 'd']
items[0] = 'ff'

console.log(items.push())

items.shift()
console.log(items)


let a = 1
let b = a

a = 2

console.log(a)   // 2
console.log(b)   // 1

var c = [1,2,3]
var d = c

c[0] = 4

console.log(c)   // [4,2,3]
console.log(d)   // [4,2,3]


var e = [1,2,3]
var f = [1,2,3]

e[0] = 4

console.log(e)   // [4,2,3]
console.log(f)   // [1,2,3]
