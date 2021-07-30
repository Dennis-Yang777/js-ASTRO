document.addEventListener('DOMContentLoaded', () => {
	const cartlist = document.querySelector('.cartlist') // 購物車清單
	const product = document.querySelector("#product") // 產品列表
	const count = document.querySelector('#count-state') // 商品數量 
	const clear = document.querySelector('#clearcart') // 清除按鈕
	const none = document.querySelector('.cartlist span') // 提示文字

	//  shoplist
	function shoplist() {
		return document.querySelectorAll('.cartlist li')
	}

	//  how many porduct
	function state() {
		return document.querySelectorAll('.cartlist li').length
	}

	//  change
	function change() {
		count.innerHTML = state()
		if (state() === 0) {
			none.innerHTML = '目前沒有商品'
		} else {
			none.innerHTML = ''
		}
	}

	//  create
	product.addEventListener("click", (e) => {
		e.preventDefault
		let id = e.target.dataset.productId
		if (id) {
			let newli = document.createElement('li')
			let newbtn = document.createElement('button')
			newli.innerHTML = `${id}`
			newbtn.innerHTML = 'X'
			newbtn.className = 'button'
			cartlist.appendChild(newli)
			newli.appendChild(newbtn)
		}
		change()
	})

	//  remove
	cartlist.addEventListener('click', (e) => {
		if (e.target.className === 'button') {
			e.target.parentNode.remove()
		}
		change()	
	})

	//  remove all
	clear.addEventListener('click', () => {
		if (state() > 0) {
			shoplist().forEach(item => {
				item.remove()
			})
		}
		change()
	})
})