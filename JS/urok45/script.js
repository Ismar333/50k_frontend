(function () {
    'use strict';


    class ploshad {

        constructor(width, height) {
            this.width = width;
            this.height = height;
        }

        calcPloshad() {
            return this.width * this.height;
        }

        calcPloshad2() {
            return this.width + this.height;
        }

    }

    class ploshadText extends ploshad{
        //extends связка двух классов

        constructor(width, height, text, value) {
            super(width, height);

            this.text = text;
            this.value = value;
        }
        
        showText() {
            console.log(`Text: ${this.text} | Value: ${this.value}`);
        }

    }

    const block = new ploshadText(20, 20, "Ismar", "Тема урока Class");
    
    block.showText();
    console.log(block.calcPloshad2());














}());