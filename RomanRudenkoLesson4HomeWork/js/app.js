'use strict';

/* 1) Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение 
с помощью console.log и вернуть пустой объект.
*/

function runIt() {

    let num, resultMessage;
    num = +document.forms.splitNumber.elements.numberValue.value; // получаем значение из поля формы
    number.split(num); // запускаем функцию и передаем значение
    if (number.valid === false) // 
        resultMessage = "Введены не корректные данные, введите число от 0 до 999.";
    else
        resultMessage = "Единицы: " + number.ones + "\nДесятки: " + number.tens + "\nСотни: " + number.hundreds;

    document.getElementById("result-message").innerHTML = resultMessage;
}

let number = {
    ones: null,
    tens: null,
    hundreds: null,
    valid: false, // флаг валидации, ставится в true если валидация прошла успешно
    split: function(num) { // получаем число
        // определяем что оно подходит под заданные параметры
        if (!isNaN(num) && num >= 0 && num < 1000) {
            this.valid = true;
            num = num.toString();
            if (num.length === 1) {
                this.ones = +num[0]; // Заносим данные в свойства объекта
                this.tens = 0;
                this.hundreds = 0;
            } else if (num.length === 2) {
                this.ones = +num[1];
                this.tens = +num[0];
                this.hundreds = 0;
            } else {
                this.ones = +num[2];
                this.tens = +num[1];
                this.hundreds = +num[0];
            }
            // debug
            //console.log(number);
            return number;
        } else { // выводим сообщение об ошибке во вводе
            this.valid = false;
            console.log("Введены не корректные данные, введите число от 0 до 999.");
            // debug
            //console.log(number);
            return {};
        }
    }
};

/* Вариант 2
Узнал о ~~ отбрасывающем все после точки(не мой вариант, но пишу для закрепления)
*/

function splitNumber(num) {
    let number = {};
    if (!isNaN(num) && num >= 0 && num < 1000) {

        number.ones = num % 10; // кладем первый остаток от деления на 10 в единицы
        num = ~~(num / 10); // отбрасываем остаток и сохраняем значение без него
        number.tens = num % 10; // сохраняем десятки
        num = ~~(num / 10); // снова отбрасываем остаток и сокращаем число до единицы
        number.hundreds = num % 10; // пример: 0.1 = 1
    } else {
        console.log("Введены не корректные данные, введите число от 0 до 999.");
        return {};
    }
    return number;
}

console.log(splitNumber(234));