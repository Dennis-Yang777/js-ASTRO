// document.addEventListener('DOMContentLoaded', () => {
// 	const a = document.querySelector('#bg')
// 	setTimeout(() => {
// 		a.innerHTML = '7414'
// 	}, 3000)
// })


document.addEventListener('DOMContentLoaded', () => {
	const butt = document.querySelector('#btn')
	butt.addEventListener('click', () => {
		const a = document.querySelector('#word')
		setTimeout(() => {
			a.innerHTML = '<h1>7414</h1>'
		}, 3000)
	})
})






