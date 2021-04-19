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

	var myFunction = function() {
		var attribute = this.parentNode.parentNode.parentNode.querySelectorAll(".ttl");
		alert(attribute[0].innerText);
	};

	for (var i = 0; i < elements.length; i++) {
		elements[i].addEventListener('click', myFunction, false);
	}


	
	// function test_fun(param, param2, param3){
	// 	var number = 10;
	// 	var res; 
	// 	res = number + param + param2 + param3;

	// 	// console.log();
	// 	alert(res);
	// }

	// test_fun(20, 1, 3);

	const arr = {
		name: "Ismar",
		age: 26,
		param: {
			color: "white",
			nat: "dungan"
		}
	};

	// console.log(arr.name);

	// delete arr.name;
	
	// console.log(arr.name);

	for (let key in arr) {

		if(typeof(arr[key]) === 'object'){
			
			for (let key2 in arr[key]) {
				console.log(arr[key][key2]);
			}

		} else {
			
			console.log(arr[key]);

		}
	}

	
