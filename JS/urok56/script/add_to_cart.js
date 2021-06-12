	
(function () {
	'use strict';

	// Добавление товара в корзину
	
	let class_name = document.getElementsByClassName("add_cart");

	let myFunction = function(evt) {
		evt.preventDefault();
		
		let title = this.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
		let price = this.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
		let image = this.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");

		let creat_li = document.createElement('li');
		creat_li.classList.add("bag__item");

		creat_li.innerHTML = '<div class="bag__img">\
										<a href="#">\
											<img src="'+image[0].src+'" alt="">\
										</a>\
									</div>\
									<div class="bag__info">\
										<p class="info__title"><a href="#">'+title[0].innerText+'</a></p>\
										<div class="info__price">\
											<span class="currency">$</span>\
                                			<span class="oprice">'+price[0].innerText+'</span>\
										</div>\
										<div class="trash">\
											<a href="#"><i class="far fa-trash-alt"></i></a>\
										</div>\
									</div>';

		let block_cart = document.querySelector('.bag.shopcard__dropdown ul');
		block_cart.appendChild(creat_li);
		
		alert("Товар успешно добавлен в корзину!");

		// Удаление товара
		delete_product();

		//получить общее количество суммы товаров в корзине
		total_price();

		//получить количество товаров в корзине
		count_product();


	};

	for (var i = 0; i < class_name.length; i++) {
		class_name[i].addEventListener('click', myFunction, false);
		// addEventListener - добовляем событие клика
		// ('click', myFunction, false);
		//  тип события
		//  Что должно выполнятся
		// Обработчик
	}


	
	
	function delete_product(){
		let click_trash = document.querySelectorAll(".trash");

		for (var i = 0; i < click_trash.length; i++) {
			click_trash[i].addEventListener('click', del_func, false);
		}

		function del_func(evt){
			evt.preventDefault();
			this.parentNode.parentNode.remove();

			total_price();
			count_product();
		}
	}


	function total_price() {
		let count_price = document.querySelectorAll(".info__price .oprice");

		let total_price = 0;

		for (var i = 0; i < count_price.length; i++) {
			total_price = total_price + (+count_price[i].textContent);
		}

		document.getElementsByClassName('total_cart')[0].innerHTML = `$ ${total_price}`;
		document.querySelectorAll('.shopcard__total span')[0].innerHTML = `$ ${total_price}`;
		
	}

	function count_product(){
		let count_ptoduct = document.getElementsByClassName("bag__item").length;
		document.getElementsByClassName('cart_count')[0].innerHTML = count_ptoduct;
	}

}());