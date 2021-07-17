

document.addEventListener('DOMContentLoaded', () => {
	const butt = document.querySelector('#btn')
	butt.addEventListener('click', () => {
		const a = document.querySelector('#word')
		setTimeout(() => {
			a.innerHTML = '<h1>7414</h1>'
		}, 3000)
	})
})





