// function a() {
// 	let x = 1
// 	return function b() {
// 		console.log(x)
// 		x++
// 	}
// }

// let c = a()  // 等同於 let c = function b() {console.log(x); x++} 
// // 重複宣告變數指向 a() ，他們各自都是獨立物件，互相不干擾，他們類似物件{}本體內都有記憶一些{屬性：值}，他們可以取得當時環境下的變數。 
// c()
// c()
// c()

function itemList() {
	return document.querySelectorAll(".list li")
}
  
function itemCount() {
return itemList().length
}
  
function updateState() {
	let stateLabel = document.querySelector("#state")
	let countLabel = document.querySelector("#count")
	let count = itemCount()

	countLabel.textContent = count

	if (count === 0) {
		stateLabel.textContent = "目前沒有任何商品"
	} else {
		stateLabel.textContent = ""
	}
}
  
const addToCart = (item) => {
	let shoppingList = document.querySelector(".list")
	shoppingList.appendChild(item)
	updateState()
}
  
document.addEventListener("DOMContentLoaded", () => {
	document.querySelector("#emptyCart").addEventListener("click", (e) => {
	  const allItems = itemList()
  
	  if (allItems.length > 0) {
		allItems.forEach(item => {
		  item.remove()
		})
	  }
	  updateState()
	})
  
	document.querySelector(".list").addEventListener("click", (e) => {
	  if (e.target.className === "closeBtn") {
		e.target.parentNode.remove()
		updateState()
	  }
	})
  
	document.querySelector("#productArea").addEventListener("click", (e) => {
	  e.preventDefault()
  
	  let link = e.target
	  let data = link.dataset
	  let id = data.productId
  
	  if (id) {
		const el = document.createElement("li")
		const btn = document.createElement("button")
		btn.textContent = "X"
		btn.className = "closeBtn"
  
		el.textContent = id
		el.appendChild(btn)
  
		addToCart(el)
		// shoppingList.appendChild(el)
	  }
	})
})