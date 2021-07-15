let a = 'hi im Harry'
a.length 會回傳 11 ，空白部分也會被計算

.split('')  --  將字串拆開後回傳成一段 array
a.split('')
console.log(a[0])     // h
將字串每個字原拆開，回傳第一個字元

a.split(' ')
console.log(a[0])     // hi
將字串每個單字拆開，回傳第一個單字

let b = '我是好寶寶'
b.split('')
console.log(b[0])     // 我
中文字沒有留空白問題

a.toUpperCase()  --  所有字元轉換成大寫
a.toLowerCase()  --  所有字元轉換成小寫

a.repeat(5)  --  a 字串內容複製五次成一個字串

let c = 5
console.log(`我一天要吃${c}餐`)
把想要的變數帶入，以字串的型態呈現