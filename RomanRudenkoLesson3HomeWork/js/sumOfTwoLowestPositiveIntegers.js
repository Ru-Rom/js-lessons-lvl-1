/*
Функция сложения двух наименьших положительных значений в массиве
ps: позднее я узнал про sort...
*/

function sumTwoSmallestNumbers(numbers) {     
    var array = numbers;
    console.log("Полученный массив: " + array + "\n");  
    
     for (c = 0; c < array.length; c++) { // Цикл что бы убрать все отрицательные значения если они есть
         if (array[c] < 0)
             array.splice(c, 1)
     }

    var firstMin = Math.min.apply(null, array); // Получаем первое минимальное значение

    var firstIndexOfMin = array.indexOf(firstMin); // Находим индекс первого числа для удаления из массива
    console.log(firstIndexOfMin); // Посмотреть какой индекс будет удален
    
    array.splice(firstIndexOfMin, 1); // Удаляем первое минимальное

    var secondMin = Math.min.apply(null, array); // Получаем второе минимальное значение

    // debugging
    var result = firstMin + secondMin;
    console.log("Массив после чистки и отсева первого минимального: " + array + "\n");
    console.log("Первое значение: = " + firstMin + ", второе значение = " + secondMin + " | " + result);
    // debugging
    
    return firstMin + secondMin;


};