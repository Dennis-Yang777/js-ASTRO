
document.addEventListener("DOMContentLoaded", () => {
	const mainDiv = document.querySelector(".main")
	const AllDiv = document.querySelectorAll("div")
	mainDiv.addEventListener('click', (e) => {
		AllDiv.forEach((ele) => {
			ele.classList.remove("clicked")
		})
		// 先移除所有上色class
		let changeTarget = e.target
		changeTarget.classList.add("clicked")
		// 幫點選的div上色
	})
})