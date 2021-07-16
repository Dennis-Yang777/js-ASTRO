let x, y = (1,2)

console.log(x)
console.log(y)




var doFirst = function (x) {
    console.log('do first...');
    x(); // <---執行傳入的doLater()
}

/** callback function **/
var doLater = () => console.log('do later...')

doFirst(doLater);






