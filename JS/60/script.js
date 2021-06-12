
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

    
    const getProduct = async (url) => {

        const result = await fetch(url);

        if(!result.ok) {
            throw new Error(`Ошибка fetch ${url} статус: ${result.status}`);
        }

        return await result.json();

    };

    getProduct("http://localhost:3000/products")
    .then(data => {


        data.forEach(({ttl, color, img, title, origin_price, old_price}) => {
            new cardProduct(
                ttl,
                color,
                img,
                title,
                origin_price,
                old_price,
                '.main__list'
            ).render();
        });

    });



    // Тема гет_тер и сет_тер

    const person = {
        name: "Ismar",
        age: 25,

        get userAge() {
            return this.age;
        },

        set userAge(num) {
            this.age = num;
        }

    };
    
    console.log(person.userAge);

    console.log(person.userAge = 35);
    
    console.log(person.userAge);


    // https://learn.javascript.ru/property-accessors



    // https://learn.javascript.ru/private-protected-properties-methods
    // https://webdevblog.ru/inkapsulyaciya-v-javascript/


    class User {

        constructor(name, age) {
            this.name = name; 
            this.age = age;
        }

        #sname = "Сулейманов";

        get() {
            console.log(`Имя пользователя: ${this.name}, Фам пользователя: ${this.#sname}, Возраст: ${this.age}`);
        }

        get UserAge() {
            return this.age;
        }

        set UserAge(age) {

            if(typeof age == "number" && age > 1 && age < 150) {
                this.age = age;
            } else {
                console.log("Недопустимое значение!");
            }

        }

    }

    const userData = new User("Исмар", 26);

    console.log(userData.UserAge);
    userData.UserAge = 58;

    console.log(userData.UserAge);




    const abc = "Алфавит";
    
    const num = 1;
    (function(){
       let num = 10;
       console.log(num);

       console.log(num + 30);
        
    }());

    console.log(num);


    const user = (function(){

        const privat = function () {
            console.log("Ismar");
        };

        return {
            sayHello: privat
        };

    }());

    user.sayHello();



    // https://learn.javascript.ru/modules-intro