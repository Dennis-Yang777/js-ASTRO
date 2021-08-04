document.addEventListener('DOMContentLoaded', () => {
	var display = document.querySelector('.display')
	var bell = document.querySelector('.bell')
	var transform = document.querySelector('.transform')
	var time = {
		displayMinute : 120,
		running : false,
		intervalId : "",
		setMinute: "",
		range : 0
	}
	var numberKeyCode = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 190]
	var directKeyCode = [37, 38, 39]

	document.addEventListener('keydown', (e) => {
		console.log(e.key);
		function calTime() {
			if (time.displayMinute <= 0) {
				timeStop()
				bell.play()
			} else {
				time.displayMinute -= 1
				var calMinute = Math.floor(Math.floor(time.displayMinute % 3600) / 60)
				var calSecond = time.displayMinute % 60
				display.innerText = `${calMinute}:${calSecond}`
				bgTransform()
			}
		}
		function timeGo() {
			time.intervalId = setInterval(() => {
				calTime()
			}, 1000)
			time.running = true
		}
		function timeStop() {
			clearInterval(time.intervalId)
			time.running = false
		}
		function bgTransform(sec = 1) {
			time.range += parseFloat(sec / (time.setMinute * 60) * 100)
			transform.style.width = `${time.range}%`
			transform.classList.remove("hide")
		}

		// 輸入時間
		if (numberKeyCode.includes(e.keyCode)) {
			if (e.key === "." && !time.setMinute.includes(".")) {
				time.setMinute = time.setMinute.concat(e.key)
				parseFloat(time.setMinute)
			} else if (e.key === "." && time.setMinute.includes(".")) {
				return
			} else if (e.key !== ".") {
				time.setMinute = time.setMinute.concat(e.key)
			}
		}

		// 時間控制或重置
		if (directKeyCode.includes(e.keyCode)) {
			switch (e.key) {
				case 'ArrowLeft' :
					if ((time.setMinute * 60 - time.displayMinute) > 5) {
						time.displayMinute += 5
						bgTransform(-5)
					}
					break
				case 'ArrowUp' :
					time.displayMinute = time.setMinute * 60
					time.range = 0
					break
				case 'ArrowRight' :
					time.displayMinute -= 5
					bgTransform(5)
					break
			}
		}
 
		// 時間開關
		if (e.key === "Enter" && !time.running && !time.setMinute) {
			time.setMinute = time.displayMinute / 60
			timeGo()
		} else if (e.key === "Enter" && !time.running && time.setMinute <= 60) {
			time.displayMinute = time.setMinute * 60
			timeGo()
		} else if (e.key === " " && time.running){
			timeStop()
		} else if (e.key === " " && !time.running) {
			timeGo()
		} else {
			return
		}
	}) 
})

