/* 
Конвертер температуры. 
Принимаем числовое значение температуры в градусах Цельсия.
Выводим сконвертированное значение в градусах по Фаренгейту.
*/

var input = document.getElementById("tempValue");

input.addEventListener("keyup", function(event) { // скопирован из найденого примера
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the button element with a click
        document.getElementById("calcTempButton").click();
    }
});

function toFahrenheit() {
    // Получаем данные из элемента tempValue
    celsiusTemp = document.forms["temretureCalculator"].elements["tempValue"].value;

    // Переводим градусы Цельсия в градусы по Фаренгейту
    fahrenheitTemp = (9 / 5) * celsiusTemp + 32;

    // Округляем полученное значение до второго знака после запятой
    fahrenheitTemp = fahrenheitTemp.toFixed(2);

    // Формируем сообщение с результатом расчетов
    message = "Вы задали температуру " + celsiusTemp + " °C, по шкале Фаренгейта это будет: " + fahrenheitTemp + " °F";
    alert(message);
}

/* 
Калькулятор пройденой дистанции. 
Принимаем скорость в м\с или км\ч и время в пути.
Выводим расстояние, если пройденная дистанция меньше 1000м, то в м, если больше, то в км. 
*/

function distanceCalc() {
    // Получаем данные из элементов формы
    speedUnits = document.forms.distanceCalculator.elements.speedUnits.value;
    timeUnits = document.forms.distanceCalculator.elements.timeValue.value;
    V = document.forms.distanceCalculator.elements.speedValue.value;
    T = document.forms.distanceCalculator.elements.pacedTime.value;

    // Для удобства переводим полученные значения в одни единицы измерения
    kmhSpeed = (speedUnits === "msec") ? (V * 3.6) : V;

    // Здесь if а ниже аналогичное через тернарный ? просто что бы лучше усвоить оба варианта
    if (timeUnits === "hours") {
        timeUnitsTxt = "часа";
        timeInHours = T;
    } else {
        timeUnitsTxt = "минут/ы";
        timeInHours = T / 60;
    }

    //timeInHours = (timeUnits === "minutes") ? T / 60 : T;

    // Вычисляем пройденную дистанцию
    journeyDistance = kmhSpeed * timeInHours;

    // Выбираем значения для текстового описания в зависимости от пройденого расстояния
    distanceUnitsTxt = (journeyDistance < 1) ? " метров" : " километров";

    // Если пройденная дистанция меньше 1 км, то выводим данные в метрах
    journeyDistance = (journeyDistance < 1) ? journeyDistance * 1000 : journeyDistance;

    // Округляем полученное значение до второго знака после запятой
    journeyDistance = journeyDistance.toFixed(2);

    // Формируем сообщение с результатом расчетов
    var message = "С вашей скоростью " + kmhSpeed + " км/час, за " + T + " " + timeUnitsTxt + ":\nВы преодолели: " + journeyDistance + distanceUnitsTxt;
    alert(message);
}