// 2) По клику на кнопку добавить в корзину товар с след параметрами:
//         1) Картинка
//         2) Заголовок
//         3) Доп параметры цвет
//         4) Цена
//     3) Добавить в корзину

// Конкретные задачи:
    // 1) Получить картинку
    // 2) Получить заголовок
        // Решение: 
        //     let ttl = document.getElementsByClassName("ttl");
        //     ttl[1].innerText

    // 3) Получить доп параметры
    // 4) Получить цену
    
    // Прицип получения данных следующий:
    // Получить данные можно с помощью:
    // .class
    // #id
    // attribute
    // tag


    // .class - document.getElementsByClassName  - Внутри документа получить элементы по названию класса
    //          вкладка
    //          (.) связка 
    //          get  - получить
    //          Elements  - Элементы (потому что классов бывает несколько)
    //          By  - по / от
    //          ByClassName  - название класса




    // let ttl = document.getElementsByClassName("ttl");
    // ttl[1].innerText
    
        //Результат: ничего не вывелось

    // Без команды вывод ничего не выведется!

    // let ttl = document.getElementsByClassName("ttl");
	// console.log(ttl[0].innerText);
    // console.log(ttl[1].innerText);
    // console.log(ttl[2].innerText);
    // console.log(ttl[3].innerText);
    // console.log(ttl[4].innerText);
    // console.log(ttl[5].innerText);
    // console.log(ttl[6].innerText);
    // console.log(ttl[7].innerText);
	// let ttl = document.getElementById("ttl");


    // var arr = ["Яблоко", "Апельсин", "Груша"];
    // arr.forEach(function(item, i, arr) {
    // 	alert( i + ": " + item + " (массив:" + arr + ")" );
    // });


	// var arr = [1, -1, 2, -2, 3, "asda"];

	// var positiveArr = arr.filter(function(number) {
	// 	return number > 1;
	// });

	// alert( positiveArr ); // 1,2,3


	// var names = ['HTML', 'CSS', 'JavaScript'];

	// var nameLengths = names.map(function(name) {
	// 	return name.length;
	// 	//length - длина текста
	// });

	// // получили массив с длинами
	// alert( nameLengths ); // 4,3,10


	// var arr = [1, -1, 2, -2, 3];

	// function isPositive(number) {
	// 	return number > 0;
	// }

	// alert( arr.every(isPositive) ); // false, не все положительные
	// alert( arr.some(isPositive) ); // true, есть хоть одно положительное


	// var arr = [1, 12, 23, 43, 5];

	// // для каждого элемента массива запустить функцию,
	// // промежуточный результат передавать первым аргументом далее
	// var result = arr.reduce(function(sum, current) {
	// 	return sum + current;
	// }, 0);

	// alert( result ); // 84


	// let ttl = document.querySelectorAll(".body_product > .ttl");

	// console.log(ttl);
	// Вариант вывода номер 1
		// console.log(ttl[0].innerText);
		// console.log(ttl[1].innerText);
		// console.log(ttl[2].innerText);
		// console.log(ttl[3].innerText);
		// console.log(ttl[4].innerText);

	// for (let text of ttl) {
	// 	console.log(text.innerText);
	// }



	var elements = document.getElementsByClassName("add_cart");

	var myFunction = function(evt) {
		evt.preventDefault();
		var title = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
		var price = this.parentNode.parentNode.parentNode.querySelectorAll(".price span");
		var image = this.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");
		let creat_li = document.createElement('li');

		console.log(title);
		console.log(price);
		console.log(image[0].src);
		// creat_li.innerHTML = '<div class="row">\
		// 						<div class="col-sm-1">\
		// 							<img src="'+image[0].getAttribute('src')+'" alt="img1.jpg" width="100">\
		// 						</div>\
		// 						<div class="col-sm-2">\
		// 							<p class="ttl">'+title[0].innerText+'</p>\
		// 							<p class="price">'+price[0].innerText+'</p>\
		// 						</div>\
		// 					</div>';

		let block_cart = document.querySelector('.cart ul');
		block_cart.appendChild(creat_li);
		
		alert("Товары успешно добавлены в корзину!");
	};

	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click', myFunction, false);
	}

	

	// Что такое function 

	let num = 200;


		function name_fun(num){
			let per_const = 120;
			let result;

			result = per_const + num;
			console.log(result);
		}
	name_fun(num);

	// console.log(num);

	

	// Методы и Свойства строк
	
	let text = "          Привет! как у тебя дела?            ";
	console.log(text);
	console.log(text.trim());

	// Методы и Свойства чисел
	let number = 120;
	number.toString();
	
	
	let x = 9;
	let a = "10";
	let result;
	result = x + +a;

	console.log(result);


	