document.addEventListener('DOMContentLoaded', () => {
	var display = document.querySelector('.display')
	var bell = document.querySelector('.bell')
	var transform = document.querySelector('.transform')
	var time = {
		minute : 120,
		running : false,
		intervalId : "",
		setMinute: "",
		range : 0
	}
	var numberKeyCode = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 190]
	var directKeyCode = [37, 38, 39]

	document.addEventListener('keydown', (e) => {
		function calTime() {
			if (time.minute <= 0) {
				timeStop()
				bell.play()
			} else {
				time.minute -= 1
				var calMinute = Math.floor(Math.floor(time.minute % 3600) / 60)
				var calSecond = time.minute % 60
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
		function bgTransform(x = 1) {
			time.range += parseFloat(x / (time.setMinute * 60) * 100)
			transform.style.width = `${time.range}%`
			transform.classList.remove("none")
		}

		// 輸入時間
		if (numberKeyCode.includes(e.keyCode)) {
			if (e.keyCode === 190) {
				time.setMinute = time.setMinute.concat('.')
				parseFloat(time.setMinute)
			} else {
				time.setMinute = time.setMinute.concat(numberKeyCode.indexOf(e.keyCode))
			}
		}

		// 時間控制或重置
		if (directKeyCode.includes(e.keyCode)) {
			switch (e.keyCode) {
				case 37 :
					time.minute += 5
					bgTransform(-5)
					break
				case 38 :
					time.minute = time.setMinute * 60
					time.range = 0
					break
				case 39 :
					time.minute -= 5
					bgTransform(5)
					break
			}
		}
 
		// 時間開關
		if (e.keyCode === 13 && !time.running && !time.setMinute) {
			time.setMinute = time.minute / 60
			timeGo()
		} else if (e.keyCode === 13 && !time.running && time.setMinute <= 60) {
			time.minute = time.setMinute * 60
			timeGo()
		} else if (e.keyCode === 32 && time.running){
			timeStop()
		} else if (e.keyCode === 32 && !time.running) {
			timeGo()
		} else {
			return
		}
	}) 


})

