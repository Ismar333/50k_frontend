"use strict";
    // использование строго режима для обработки данных
        
    // ООП - понятие 
    // Применение


    // Как понять что есть строка

    let str = "текст";
    let strObj = new String(str);

    // console.log(typeof(str));
    // console.log(strObj);

    let array = [1,2,3];

    // console.log(array);


    let car = {
        kuzov: "Железо",
        kolesa: "4 колеса",
        modal: function(){
            alert("Hello");
        }
    };
    
    // let mb = {
    //     marka: "Мерс",
    //     god: "2021"
    // };

    let mb = Object.create(car);


    // mb.__proto__ = car;

    // Object.setPrototypeOf(mb, car);

    console.log(mb.modal);

    mb.modal();


