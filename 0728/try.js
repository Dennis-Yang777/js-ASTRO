// document.addEventListener('DOMContentLoaded', () => {
// 	const n0 = document.getElementById('0')
// 	const n1 = document.getElementById('1')
// 	const n2 = document.getElementById('2')
// 	const n3 = document.getElementById('3')
// 	const n4 = document.getElementById('4')
// 	const n5 = document.getElementById('5')
// 	const n6 = document.getElementById('6')
// 	const n7 = document.getElementById('7')
// 	const n8 = document.getElementById('8')
// 	const n9 = document.getElementById('9')
// 	const ac = document.getElementById('ac')
// 	const result = document.querySelector("#displayResult")
// 	n0.addEventListener('click', () => {
// 		if (result.innerHTML == 0) {
// 			result.innerHTML = "0"
// 		} else {
// 			result.innerHTML = `${result.innerHTML}` + 0
// 		}
// 	})
// 	n1.addEventListener('click', () => {
// 		if (result.innerHTML == 0) {
// 			result.innerHTML = '1'
// 		} else {
// 			result.innerHTML = `${result.innerHTML}` + 1
// 		}
// 	})
// 	n2.addEventListener('click', () => {
// 		if (result.innerHTML == 0) {
// 			result.innerHTML = '2'
// 		} else {
// 			result.innerHTML = `${result.innerHTML}` + 2
// 		}
// 	})
// 	n3.addEventListener('click', () => {
// 		if (result.innerHTML == 0) {
// 			result.innerHTML = '3'
// 		} else {
// 			result.innerHTML = `${result.innerHTML}` + 3
// 		}
// 	})
// 	n4.addEventListener('click', () => {
// 		if (result.innerHTML == 0) {
// 			result.innerHTML = '4'
// 		} else {
// 			result.innerHTML = `${result.innerHTML}` + 4
// 		}
// 	})
// 	n5.addEventListener('click', () => {
// 		if (result.innerHTML == 0) {
// 			result.innerHTML = '5'
// 		} else {
// 			result.innerHTML = `${result.innerHTML}` + 5
// 		}
// 	})
// 	n6.addEventListener('click', () => {
// 		if (result.innerHTML == 0) {
// 			result.innerHTML = '6'
// 		} else {
// 			result.innerHTML = `${result.innerHTML}` + 6
// 		}
// 	})
// 	n7.addEventListener('click', () => {
// 		if (result.innerHTML == 0) {
// 			result.innerHTML = '7'
// 		} else {
// 			result.innerHTML = `${result.innerHTML}` + 7
// 		}
// 	})
// 	n8.addEventListener('click', () => {
// 		if (result.innerHTML == 0) {
// 			result.innerHTML = '8'
// 		} else {
// 			result.innerHTML = `${result.innerHTML}` + 8
// 		}
// 	})
// 	n9.addEventListener('click', () => {
// 		if (result.innerHTML == 0) {
// 			result.innerHTML = '9'
// 		} else {
// 			result.innerHTML = `${result.innerHTML}` + 9
// 		}
// 	})
// 	ac.addEventListener('click', () => {
// 		result.innerHTML = '0'
// 	})
// })
document.addEventListener('DOMContentLoaded', () => {
	const btngroup = document.querySelector('#buttonGroup').querySelectorAll("button")
	const result = document.querySelector("#displayResult")
	let concatNum = ""
	btngroup.forEach((ele,index) => {
	btngroup[index].addEventListener('click',() => {
		if (btngroup[index].id === "ac") {
			result.innerHTML = 0
			concatNum = ""
		} else {
			if (concatNum.length >= 23 && btngroup[index].id !== '1') {
				return
			} else if (concatNum.length >= 26 && btngroup[index].id === '1') {
				return
			} else {
				concatNum = concatNum.concat(btngroup[index].innerHTML)
				result.innerHTML = concatNum
			}
		}
	})
	})
})


