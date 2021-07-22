// document.addEventListener('DOMContentLoaded', () => {
// 	const button = document.querySelector('#start-btn')
// 	const time = document.querySelector('#timer')
// 	button.addEventListener('click', () => {
// 		setInterval(() => {
// 			time.innerHTML++
// 		}, 1000);
// 	})
// })


// document.addEventListener('DOMContentLoaded', () => {
// 	const button = document.querySelector('#start-btn')
// 	const time = document.querySelector('#timer')
// 	button.addEventListener('click', () => {
// 		for (let i = 1; i <= 10; i++) {
// 			setTimeout(() => {
// 				time.innerHTML = i
// 			}, i * 1000)
// 		}
// 	})
// })

// document.addEventListener('DOMContentLoaded', () => {
// 	const button = document.querySelector('#start-btn')
// 	const time = document.querySelector('#timer')
// 	button.addEventListener('click', () => {
// 		for (var i = 1; i <= 10; i++) {
// 			(() => {
// 				setTimeout(() => {
// 					time.innerHTML = i
// 				}, i * 1000)
// 			})()
// 		}
// 	})
// })

document.addEventListener("DOMContentLoaded", () => {
	const button = document.querySelector("#start-btn")
	const time = document.querySelector("#timer") 
	let running = false
	let number = 0
	let intervalID
  
	button.addEventListener("click", () => { 

	  if(!running) {
		intervalID = setInterval(() => {
		  number++
		  time.innerText = `${number}`
		}, 1000)
		button.innerText = "暫停"
		running = true
	  } else {
		clearInterval(intervalID)
		running = false
		button.innerText = "繼續"
	  }
	})
})    