document.addEventListener('DOMContentLoaded', () => {
	const numberGroup = document.querySelectorAll('.number')
	const display = document.querySelector('.display')
	const clear = document.querySelector('.clear')
	const negative = document.querySelector('.negative')
	const percent = document.querySelector('.percent')
	const operator = document.querySelectorAll('.operator')
	let total = 0

	const result = {
		number : '',
		number2 : '',
		operator : '',
		toInt() {
			this.number = parseFloat(this.number)
			this.number2 = parseFloat(this.number2)
			return parseFloat(this.number) 
		},
		toString() {
			this.number = this.number.toString()
			// this.number2 = this.number2.toString()
			return this.number.toString() 
		}
	}
	

	function reset() {
		display.innerText = '0'
		result.number = ''
	}

	function operation () {
		result.number = total
		display.innerText = total
		result.number2 = ''
		result.toString()
	}

	numberGroup.forEach((ele, index) => {
		numberGroup[index].addEventListener('click', () => {
			let eachNumber = numberGroup[index].innerText
			result.number = result.number.concat(eachNumber)
			if (result.number === '00' && eachNumber === '0') {
				result.number = '0'
			} else if (result.number === '0') {
				result.number = '0'
			} else {
				display.innerText = result.number
			}
		})
	})

	operator.forEach((ele, index) => {
		operator[index].addEventListener('click', () => {
			let whichOperator = operator[index].innerText
			if (operator[index].innerText === '=') {
				if (result.number && result.number2) {
					result.toInt()
					switch (result.operator) {
						case '+':
							total = result.number2 + result.number
							operation()
							break
						case '-':
							total = result.number2 - result.number
							operation()
							break
						case '*':
							total = result.number2 * result.number
							operation()
							break
						case '/':
							total = result.number2 / result.number
							operation()
							break
						default :
							return
					} 
				} else {
					true
				}
			} else {
				result.number2 = result.number
				result.operator = whichOperator
				result.number = ''
			}
		})
	})

	clear.addEventListener('click', () => {
		reset()
	})

	negative.addEventListener('click', () => {
		let change = result.toInt() * -1
		display.innerText = change
		result.number = change
		result.toString()
	})

	percent.addEventListener('click', () => {
		let change = result.toInt() / 100
		display.innerText = change
		result.number = change
		result.toString()
	})



})