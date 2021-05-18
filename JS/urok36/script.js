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

    // console.log(mb.modal);

    // mb.modal();


    // описание человека

    // жен
    // муж



    const ppl = {
        ruki: 2,
        nogi: 2,
        golova: 1,
        serdce: 1,
        glaza: 2,
        gruppaKrovi: {
            gruppa1: 1,
            gruppa2: 2
        },
        pol: {
            mj: "Муж",
            jen: "Жен",
        },
        mj: function() {
            // Кол-во рук:2 | Кол-во ног: 2 | Кол-во голов: 1 | Кол-во сердце: 1 | группа крови 2 | Пол: муж
            console.log(`Кол-во рук:${this.ruki} | Кол-во ног: ${this.nogi} | Кол-во голов: ${this.golova} | Кол-во сердце: ${this.serdce} | группа крови ${this.gruppaKrovi.gruppa1} | Пол: ${this.pol.mj}`);
        },
        js: function() {
            console.log(`Кол-во рук:${this.ruki} | Кол-во ног: ${this.nogi} | Кол-во голов: ${this.golova} | Кол-во сердце: ${this.serdce} | группа крови ${this.gruppaKrovi.gruppa2} | Пол: ${this.pol.jen}`);
        }
    }

    const test = prompt();

    if (test == 'мужчина') {
        console.log(ppl.mj());
    } else {
        console.log(ppl.js());
    }





