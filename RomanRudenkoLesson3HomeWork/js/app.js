// 1) С помощью цикла while вывести все простые числа в промежутке от 0 до 100


var i = 0;
//debugger;
//var n = i - 1;
while (i <= 100) {
    //debugger;
    if ((i > 1) && (i % 2 != 0) || i == 2) {
        for (n = 2; n < i; n++) { // перечисляем от 2 до проверяемого числа
            if (i % n == 0) // если число делится на n то останавливаем
                break;
            else if (i - 1 == n)
                console.log(i); // если число не делится без остатка то выводим его
        }
        i++;
    } else {
        i++;
    }
}




// 2) С помощью цикла do…while написать функцию для вывода чисел от 0 до 10, 
// чтобы результат выглядел так:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
var a = 0;
do {
    if (a == 0)
        txt = " - это ноль";
    else if (a % 2 == 0) // Если число кратно заданному то остаток от деления 0
        txt = " - это четное число";
    else
        txt = " - это нечетное число";

    console.log(a + txt);
    a++;

}
while (a <= 10);


// 3) * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно вот так:
// for(…){// здесь пусто}

for (i = 0; i <= 9; console.log(i++)) {

}


// 4) * Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
// только у вашей пирамиды должно быть 20 рядов, а не 5:
function spruceGenerator(spruceSize) { // Код несколько колхозный, очень хочу спать и старался просто успеть
    var star = "";
    var space = "";
    var spruceSize = +document.forms.spruceGenerator.elements.sizeValue.value;;
    var spaceCount = spruceSize - 1;
    var completeResult = "";
    //secondRun = false;

    for (cnt = 0; cnt <= spruceSize; cnt++) {

        for (j = spaceCount; j >= 0; j--) { // Цикл для добавление пробелов перед верхней частью елки
            space += "&nbsp;"; // Символ пробела
        }
        spaceCount--; // Уменьшаем число добавляемых отступов с прохождением каждого цикла
        spaceTxt = space;
        space = "";

        if (cnt >= 1)
            star += "*"; // Рисуем дополнительный символ для полей, знаю что надо\можно иначе, позже переделаю если будет время

        star += "*";
        txtMessage = spaceTxt + star + "<br>"; // Создаем строчку
        completeResult += txtMessage; // Собираем все строки вместе
        //console.log(spaceTxt + star); // Отключено т.к. пробел был заменен &nbsp; для вывода в браузере
        document.getElementById("result-message").innerHTML = completeResult;
    }

}

// function spruceGenerator(a) {
//     let star2 = "";
//     let space = " ";
//     let spaceCount = a / 2;

//     for (cnt = 0; cnt <= a; cnt++) {
//         console.log(star += "*");
//     }

// }
/*
1234567890*1
123456789***3
12345678*****5
1234567*******7
123456*********9
12345***********11
1234*************
123***************
12*****************
1*******************
*********************
*/