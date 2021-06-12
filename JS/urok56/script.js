(function () {
	'use strict';
	class cardProduct {
        
        constructor(tooltips, tooltipsClass,  img, title, originPrice, oldPrice, innerBlock){
            this.tooltips = tooltips;
            this.tooltipsClass = tooltipsClass;
            this.img = img;
            this.title = title;
            this.originPrice = originPrice;
            this.oldPrice = oldPrice;
            this.innerBlock = document.querySelector(innerBlock);
            this.valuta = 85;
            this.originPrice = this.convetToUSD(this.originPrice);
            this.oldPrice = this.convetToUSD(this.oldPrice);
        }

        convetToUSD(price){
            const result = price / this.valuta;
            return result.toFixed(1);
        }

        render() {
            const div = document.createElement("div");
            div.classList.add("list__item");
            div.innerHTML = `
                            <div class="item__img">
                                <div class="tooltips ${this.tooltipsClass}">
                                    <span>${this.tooltips}</span>
                                </div>

                                <img src=${this.img} alt="">

                                <div class="arrows">
                                    <span><i class="fas fa-arrows-alt"></i> Quick view</span>
                                </div>
                            </div>
                            <div class="item__title">
                                <a href="?search=#" class="ttl">${this.title}</a>

                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <span>6 Review(s)</span>
                                </div>

                                <div class="price">
                                    <span class="currency">$</span>
                                    <span class="oprice">${this.originPrice}</span>
                                    <del>$ ${this.oldPrice}</del>
                                </div>
                            </div>

                            <div class="item__hide">
                                <div class="item__icon">
                                    <a class="icon__hidden add_cart" href="#"><i class="fas fa-shopping-bag"></i></a>
                                </div>

                                <div class="item__icon">
                                    <a class="icon__hidden" href="#"><i class="fas fa-balance-scale"></i></a>
                                </div>

                                <div class="item__icon">
                                    <a class="icon__hidden" href="#"><i class="fas fa-heart"></i></a>
                                </div>
                            </div>
            `;

            this.innerBlock.append(div);

        }
    }

    // tooltips, img, title, originPrice, oldPrice, innerBlock
    new cardProduct(
        'NEW',
        'orange',
        'img/content/img61.jpg',
        'Animal Print Sweatshirt 1',
        1230,
        2500,
        '.main__list'
    ).render();

    new cardProduct(
        'Sale',
        'green',
        'img/content/img50.jpg',
        'Animal Print Sweatshirt 2',
        1230,
        2500,
        '.main__list'
    ).render();

    new cardProduct(
        '-25',
        'orange',
        'img/content/img63.jpg',
        'Animal Print Sweatshirt 3',
        1230,
        2500,
        '.main__list'
    ).render();

    new cardProduct(
        'NEW',
        'orange',
        'img/content/img63.jpg',
        'Animal Print Sweatshirt 4',
        1230,
        2500,
        '.main__list'
    ).render();
    
    new cardProduct(
        'NEW',
        'green',
        'img/content/img63.jpg',
        'Animal Print Sweatshirt 5',
        1230,
        2500,
        '.main__list'
    ).render();



	// https://learn.javascript.ru/data-storage

	// localStorage.setItem('user_name', "Ismar");
	// localStorage.setItem('user_sname', "Suleimanov");
	// localStorage.setItem('user_age', "25");
	// localStorage.setItem('user_address', "Bishkek");

	// let res = localStorage.getItem('user_name');
	
	// console.log(res);
	// localStorage.clear();
	

	const btnClick = document.querySelector(".form [name='save']");
	const btnReset = document.querySelector(".form [name='reset']");
	
	const check_name = localStorage.getItem('name');
	const check_sname = localStorage.getItem('sname');
	const check_number = localStorage.getItem('number');
	const check_addres = localStorage.getItem('addres');


	if (check_name || check_sname || check_number || check_addres) {
		document.getElementsByClassName("name")[0].value = check_name;
		document.querySelector("[name='sname']").value = check_sname;
		document.querySelector("[name='number']").value = check_number;
		document.querySelector("[name='addres']").value = check_addres;
	}

	btnClick.addEventListener('click', function(e){
		e.preventDefault();
		
		const name = document.getElementsByClassName("name")[0].value;
		const sname = document.querySelector("[name='sname']").value;
		const number = document.querySelector("[name='number']").value;
		const addres = document.querySelector("[name='addres']").value;

		if(name && sname && number && addres) {
			localStorage.setItem('name', name);
			localStorage.setItem('sname', sname);
			localStorage.setItem('number', number);
			localStorage.setItem('addres', addres);
			alert("Данные сохранены");
		} else {
			alert("Поля не должны быть пустыми!")
		}
		

	});

	btnReset.addEventListener('click', function(e){
		e.preventDefault();
		localStorage.clear();
	});
	



}());