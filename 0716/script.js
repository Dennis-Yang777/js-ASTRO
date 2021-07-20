document.addEventListener('DOMContentLoaded', () => {
	const button = document.querySelector('#start-btn')
	const time = document.querySelector('#timer')
	button.addEventListener('click', () => {
		setInterval(() => {
			time.innerHTML++
		}, 1000);
	})
})


document.addEventListener('DOMContentLoaded', () => {
	const button = document.querySelector('#start-btn')
	const time = document.querySelector('#timer')
	button.addEventListener('click', () => {
		for (let i = 1; i <= 10; i++) {
			setTimeout(() => {
				time.innerHTML = i
			}, i * 1000)
		}
	})
})