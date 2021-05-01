(function () {
    // 'use strict';

    

    // function get_this(a,b) {
    //     // console.log(this);

    //     function arif() {
    //         // console.log(this);
            
    //         return a + b;
    //     }
    //     console.log(arif());
    // }

    // get_this(10,3);

    // this - это возможность вызова объекта и всего содержимого что находится внутри объекта
    // использование this внутри функции так же будет обращаться к window
    // если мы включим 'use strict' this выдаст сообщение undefined


    // const obj = {
    //     name: "Ismar",
    //     age: 26,
    //     sum: function (){
    //         console.log(this);
    //         // доступен (Ismar / 26)

    //         function test() {
    //             console.log(this);
    //             // не доступен (undefined)
    //         }
    //         test();
    //     }
    // };

    // obj.sum();

    // при использовании this внутри метода объекта obj у this есть возможность использовать рядом стоящие данные
    // если внутри одного метода создать функцию и внутри него использовать this то она обратится к глобальному окну window

    // function User(name, age) {
    //     this.name = name,
    //     this.age = age,
    //     this.data_ = function() {
    //         console.log("Hello " + this.name);
    //     };
    // }

    // let ismar = new User("Ismar", 26);

    // ismar.data_();

    // This может быть использован внутри функции которая создает собъекты и this получит предсозданные объекты и их данные


    // function hellow(age) {
    //     console.log(this);
    //     console.log(this.name);
    //     console.log(age);
    // }


    // const newObj = {
    //     name: "Ismar"
    // };

    // hellow.call(newObj, "26");
    // hellow.apply(newObj, ['26']);

    // function count(num) {
    //     return this+num;
    // }

    // const mnojitel = count.bind(5);

    // console.log(mnojitel(10));

    // ручная привязка объектов и данных к this с помощью call/apply/bind


    let btn = document.querySelector("#btn1");

    btn.addEventListener("click", function(){

        this.remove();

    });




        
        




}());