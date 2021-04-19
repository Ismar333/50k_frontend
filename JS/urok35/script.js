"use strict";
    // использование строго режима для обработки данных

    // Передача по ссылке или по значению

        // Копирование объекта
        // Копирование массива
        
        // Новые стандарты
        // Опрератор разворота Spread

        let a = 10,
            b = a;

        b = b + 15;


        // console.log(b);
        // console.log(a);

        const arr1 = {
            a: 1,
            b: 2
        };

        // console.log(arr1);
        const newArr = arr1; //ссылка на сам объект
        // console.log(newArr);

        newArr.a = 10;

        // console.log(newArr);
        // console.log(arr1);

        function copy_arr(myObj) {

            const newObj = {};

            let key;
            for(key in myObj){
                newObj[key] = myObj[key];
            }

            return newObj;

        }

        
        const oldObj = {
            name: "Ismar",
            surname: "Suleimanov",
            hobby: {
                1: "swimming",
                2: "running",
                3: {
                    a: "asd"
                }
            }
        };

        // console.log(oldObj);
        const newObj = copy_arr(oldObj);

        newObj.name = "Alex";

        // console.log(newObj);
        // console.log(oldObj);


        newObj.hobby[1] = "Чтение";

        // console.log(newObj);
        // console.log(oldObj);

        const newAssign = Object.assign({},oldObj);
        
        newAssign.name = "Panda";

        // console.log(newAssign);
        // console.log(oldObj);

        
        const arr = ["яблоки", "груши", "виноград"];
        // Индексы      0         1          2

        // const arr2 = arr.slice(0, 1);

        // arr2[2] = "вишня"; 
        // console.log(arr); 
        // console.log(arr2);

    
        const tehnika = ["телефон", "планшеты", "компьютеры"],
              melodii = ["рок", "хип-хоп", "джаз"],
              combo   = [...tehnika, ...melodii, "плавание", "бег"];

            //   console.log(combo);

        const old_per = ["телефон", "планшеты", "компьютеры"];


        const new_per = [...old_per];

        new_per[1] = "футболка";

        // console.log(old_per);
        // console.log(new_per);


        const arr3 = {
            a: 1,
            b: 2
        };

        const arr4 = {...arr3};

        arr4.b = 10;
        
        console.log(arr3);
        console.log(arr4);