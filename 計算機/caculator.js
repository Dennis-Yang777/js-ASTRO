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
	

	function reset() {
		display.innerText = '0'
		result.displayNumber = ''
		result.savedNumber = ''
		result.operator = ''
	}

	function pack () {
		result.savedNumber = total
		display.innerText = total
		result.displayNumber = ''
		result.toString()
	}

	function operation () {
		switch (result.operator) {
			case '+':
				total = result.savedNumber + result.displayNumber
				pack()
				break
			case '-':
				total = result.savedNumber - result.displayNumber
				pack()
				break
			case '*':
				total = result.savedNumber * result.displayNumber
				pack()
				break
			case '/':
				total = result.savedNumber / result.displayNumber
				pack()
				break
			default :
				return
		} 
	}

	numberGroup.forEach((ele, index) => {
		numberGroup[index].addEventListener('click', () => {
			let whichNumber = numberGroup[index].innerText
			let change = result.displayNumber.concat(whichNumber)
			
			if (result.displayNumber === '0' && whichNumber === '0') {
				result.displayNumber = '0'
			} else if(change.length === 2 && whichNumber !== '0' && change.indexOf(0) === 0) {
				result.displayNumber = whichNumber
				display.innerText = result.displayNumber
			} else if (whichNumber === '.' && /[.]+/.test(result.displayNumber)) {
				return
			} else {
				result.displayNumber = change
				display.innerText = result.displayNumber
			}
		})
	})

	operator.forEach((ele, index) => {
		operator[index].addEventListener('click', () => {
			let whichOperator = operator[index].id
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
					} else{
						return
					}
				}
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