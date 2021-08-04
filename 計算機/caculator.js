document.addEventListener('DOMContentLoaded', () => {
	const numberGroup = document.querySelectorAll('.number')
	const display = document.querySelector('.display')
	const clear = document.querySelector('.clear')
	const negative = document.querySelector('.negative')
	const percent = document.querySelector('.percent')
	const operator = document.querySelectorAll('.operator')
	let total = 0

	const result = {
		displayNumber : '',
		savedNumber : '',
		operator : '',
		toInt() {
			this.displayNumber = parseFloat(this.displayNumber)
			this.savedNumber = parseFloat(this.savedNumber)
		},
		toString() {
			this.displayNumber = this.displayNumber.toString()
			this.savedNumber = this.savedNumber.toString()
		}
	}
	// 變換數字的物件
	

	function reset() {
		display.innerText = '0'
		result.displayNumber = ''
		result.savedNumber = ''
		result.operator = ''
	}
	// 重置功能

	function pack () {
		result.savedNumber = total
		display.innerText = total
		result.displayNumber = ''
		result.toString()
	}
	// 運算打包

	function operation () {
		switch (result.operator) {
			case '+':
				total = ((result.savedNumber * 10000) + (result.displayNumber * 10000)) / 10000
				pack()
				break
			case '-':
				total = ((result.savedNumber * 10000) - (result.displayNumber * 10000)) / 10000
				pack()
				break
			case '*':
				total = ((result.savedNumber * 10000) * (result.displayNumber * 10000)) / 100000000
				pack()
				break
			case '/':
				total = ((result.savedNumber * 10000) / (result.displayNumber * 10000))
				pack()
				break
			default :
				return
		} 
	}
	// 	遇到各種運算子的動作

	numberGroup.forEach((ele, index) => {
		numberGroup[index].addEventListener('click', (e) => {
			let clickNumber = e.target.innerText
			let change = result.displayNumber.concat(clickNumber)
			
			if (result.displayNumber === '0' && clickNumber === '0') {
				result.displayNumber = '0'
			} else if(change.length === 2 && clickNumber !== '0' && change.indexOf(0) === 0) {
				result.displayNumber = clickNumber
				display.innerText = result.displayNumber
			} else if (clickNumber === '.' && /[.]+/.test(result.displayNumber)) {
				return
			} else {
				result.displayNumber = change
				display.innerText = result.displayNumber
			}
		})
	})



	operator.forEach((ele, index) => {
		operator[index].addEventListener('click', (e) => {
			let whichOperator = e.target.id
			if (operator[index].innerText === '=') {
				if (result.displayNumber && result.savedNumber) {
					result.toInt()
					operation()
					result.operator = whichOperator
				} else {
					return
				}
			} else {
				if (result.operator.length === 0) {
					result.savedNumber = result.displayNumber
					result.operator = whichOperator
					result.displayNumber = ''
				} else if (result.operator === '=') {
					result.operator = whichOperator
				} else {
					if (result.displayNumber && result.savedNumber) {
						result.toInt()
						operation()
						result.operator = whichOperator
					} else if (result.operator) {
						result.operator = whichOperator
						result.savedNumber = result.displayNumber
						result.displayNumber = ''
					} else {
						return
					}
				}
				console.log(result)
			}
		})
	})

	clear.addEventListener('click', () => {
		reset()
	})

	negative.addEventListener('click', () => {
		if (result.displayNumber) {
			let change = result.displayNumber * -1
			display.innerText = change
			result.displayNumber = change
			result.toString()
		} else if (result.savedNumber) {
			let change = result.savedNumber * -1
			display.innerText = change
			result.savedNumber = change
			result.toString()
		} else {
			return
		}
	})

	percent.addEventListener('click', () => {
		if (result.displayNumber) {
			let change = result.displayNumber / 100
			display.innerText = change
			result.displayNumber = change
			result.toString()
		} else if (result.savedNumber) {
			let change = result.savedNumber / 100
			display.innerText = change
			result.savedNumber = change
			result.toString()
		} else {
			return
		}
	})
})