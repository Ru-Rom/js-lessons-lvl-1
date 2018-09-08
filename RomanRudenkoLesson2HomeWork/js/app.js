'use strict';

/*
3) Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:
* если a и b положительные, вывести их разность;
* если а и b отрицательные, вывести их произведение;
* если а и b разных знаков, вывести их сумму;
*/


function abManipulator() {

    let a = +document.forms.abManipulator.elements.aValue.value; // Приводим значение из элементов к числу
    let b = +document.forms.abManipulator.elements.bValue.value;
    let calculationResult, txtMessage;

    if (isNaN(a) || isNaN(b)) {
        txtMessage = "Вы ввели данные с ошибкой";
    } else if (a >= 0 && b >= 0) {
        calculationResult = a - b;
        txtMessage = "Вы задали параметры: a = " + a + ", b = " + b;
        txtMessage = txtMessage + "<br><b>Разность</b> a и b: " + calculationResult;

    } else if (a < 0 && b < 0) {
        calculationResult = a * b;
        txtMessage = "Вы задали: a = " + a + ", b = " + b;
        txtMessage = txtMessage + "<br><b>Произведение</b> a и b: " + calculationResult;

    } else {
        calculationResult = a + b;
        txtMessage = "Вы задали: a = " + a + ", b = " + b;
        txtMessage = txtMessage + "<br><b>Сумма</b> a и b: " + calculationResult;
    }
    document.getElementById("result-message").innerHTML = txtMessage; // Отправляем в элемент с заданным id сформированные данные
}


/*
4) Присвоить переменной а значение в промежутке [0..15]. 
С помощью оператора switch организовать вывод чисел от a до 15.
*/

function switchCaseStudying() {
    // Сначала сделал с полем формы, потом подумал что интереснее оставить просто одну кнопку и спросить через prompt
    //let a = +document.forms.switchCaseStudying.elements.aValue.value; // Приводим значение из элементов к числу
    let a = +prompt("Введите число от 0 до 15:");
    let calculationResult, txtMessage;

    switch (a) { // Это что бы уяснить прелесть if, циклов, и т.п.?
        case 0:
            alert(0);
        case 1:
            alert(1);
        case 2:
            alert(2);
        case 3:
            alert(3);
        case 4:
            alert(4);
        case 5:
            alert(5);
        case 6:
            alert(6);
        case 7:
            alert(7);
        case 8:
            alert(8);
        case 9:
            alert(9);
        case 10:
            alert(10);
        case 11:
            alert(11);
        case 12:
            alert(12);
        case 13:
            alert(13);
        case 14:
            alert(14);
        case 15:
            alert(15);
            break;
        default:
            alert("Вы ввели какую-то ерунду!");
    }
}

/*
5) Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return.
*/
// Функция сложения
function calculateAddition(a, b) {
    return a + b;
}

// Функция вычитания
function calculateSubtraction(a, b) {
    return a - b;
}


// Функция умножения
function calculateMultiplication(a, b) {
    return a * b;
}


// Функция деления
function calculateDividing(a, b) {
    return a / b;
}


/*
6) Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических 
операций (использовать функции из пункта 3) и вернуть полученное значение 
(использовать switch).
*/

function simpleCalculator() {
    let chosenOperation = document.forms.simpleCalculator.elements.calcOperation.value;
    let arg1 = +document.forms.simpleCalculator.elements.arg1Value.value;
    let arg2 = +document.forms.simpleCalculator.elements.arg2Value.value;
    let calculationResult, txtMessage, txtForOperation;

    switch (chosenOperation) {
        case "add":
            calculationResult = calculateAddition(arg1, arg2);
            txtForOperation = "сложить";
            break;
        case "sub":
            calculationResult = calculateSubtraction(arg1, arg2);
            txtForOperation = "вычесть";
            break;
        case "mult":
            calculationResult = calculateMultiplication(arg1, arg2);
            txtForOperation = "перемножить";
            break;
        case "divide":
            calculationResult = calculateDividing(arg1, arg2);
            txtForOperation = "поделить";
    }

    txtMessage = "Вы задали числа: " + arg1 + " и " + arg2 + " решив их " + txtForOperation;
    txtMessage = txtMessage + "<br><span class=\"result-message-highlite\">Вот ваш результат: </span> " + calculationResult;

    document.getElementById("simpleCalculator-message").innerHTML = txtMessage; // Отправляем в элемент с заданным id сформированные данные
}
/*
8) * С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

function enPower(val, pow) {  // (2, 4)
    if (pow != 1 && pow > 0) { // pow = 4...pow = 3...pow = 2...return
        return val * enPower(val, pow - 1); // val = 2*2 = 4 /\ ... val = 4*2 = 8 /\ ... val = 8*2 = 16 retun потому что (pow стал = 1)
        
    } else {
        return val;
    }

}

console.log(enPower(2, 4));