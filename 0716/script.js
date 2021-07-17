document.addEventListener('DOMContentLoaded', () => {
	const button = document.querySelector('#start-btn')
	const time = document.querySelector('#timer')
	button.addEventListener('click', () => {
		setInterval(() => {
			time.innerHTML++
		}, 1000);
	})
})