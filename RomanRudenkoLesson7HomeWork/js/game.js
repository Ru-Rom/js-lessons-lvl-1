/*
1) Добавить стены на карту
2) Если змея ткнулась в стену гейм овер
3) Создать счетчик очков, добавляется при каждой съеденной еде
4) Сделать вывод очков
5) Установить критерий победы, скажем длина змеи 10
*/

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var game = {
    size: 20,
    snake: [], // хранит части змеи
    food: {},
    wall: [], // хранит клетки со стенами
    score: 0,
    scoresDiv: document.querySelector(".game-scores"),
    snakeLenghtToWin: 4,
    direction: {
        row: -1,
        col: 0
    },
    createBoard: function() {
        console.log('createBoard');
        var table = document.createElement('table');
        table.classList.add('game-table');

        for (var i = 0; i < this.size; i++) {
            var tr = document.createElement('tr');

            for (var j = 0; j < this.size; j++) {
                td = document.createElement('td');
                td.classList.add('game-table-cell');
                td.setAttribute('id', 'cell-' + i + '-' + j);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        document.getElementById('snake-field').appendChild(table);
    },
    // Помещаем змею на карту
    createSnake: function() {
        this.snake.push({ row: 10, col: 10 });
        this.snake.push({ row: 11, col: 10 });
    },
    render: function() {
        var elements = document.getElementsByTagName('td');

        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('snake-unit'); // Удаляем class snake-unit / food-unit
            elements[i].classList.remove('food-unit');
        }
        // Ставим классы для отображения змеи
        for (var i = 0; i < this.snake.length; i++) {
            var cell = this.snake[i];
            var id = 'cell-' + cell.row + '-' + cell.col;
            document.getElementById(id).classList.add('snake-unit');
        }
        // Рисуем еду в заданной ячейке ставя ей нужный класс для отображения
        if (this.food.row && this.food.col) {
            var id = 'cell-' + this.food.row + '-' + this.food.col;
            document.getElementById(id).classList.add('food-unit');
        }

        // Ставим стену
        if (this.wallCell.row && this.wallCell.col) {
            var id = 'cell-' + this.wallCell.row + '-' + this.wallCell.col;
            document.getElementById(id).classList.add('wall-unit');
        }
    },
    // Проверяет не принадлежит ли ячейка змее
    isSnakeCell: function(row, col) {
        //console.log("this.snake.length: "+ this.snake.length);
        for (var i = 0; i < this.snake.length; i++) {
            var cell = this.snake[i];
            if (cell.row == row && cell.col == col) {
                return true;
            }
        }

        return false;
    },
    // Проверяет не является ли ячейка стеной
    isWallCell: function(row, col) {
        for (var i = 0; i < this.wall.length; i++) {
            var cell = this.wall[i];
            if (cell.row == row && cell.col == col) {
                console.log('Стена!');
                return true;
            }
        }
        return false;
    },
    // Создаем еду
    createFood: function() {
        console.log('createFood');

        var pool = [];
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                // Проверяем что ячейка не является змеей и добавляем ее в pool[]
                if (!this.isSnakeCell(i, j) || !this.isWallCell(i, j)) {
                    pool.push({ row: i, col: j });
                }
            }
        }
        // Случайным образом выбираем ячейку из pool
        var index = random(0, pool.length);
        this.food = pool[index];
    },
    createWall: function() {
        console.log('createWall');

        var wallpool = [];
        // wallpool содержит все свободные не принадлежещие змее ячейки на момент проверки
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                // Проверяем что ячейка не является змеей
                if (!this.isSnakeCell(i, j) || !this.isWallCell(i, j)) {
                    wallpool.push({ row: i, col: j });
                } else {
                    //this.createWall();
                }
            }
        }
        // console.log('this.wall до пуша: ');
        // console.log(this.wall);
        var index = random(0, wallpool.length); // выбираем случайный индекс из массива
        this.wallCell = wallpool[index];
        this.wall.push(wallpool[index]); // добавляем ячейку к остальным стенам
        console.log('Стена: ');
        console.log(this.wall);
    },
    showScores: function() {
        this.scoresDiv.innerHTML = "";
        this.scoresDiv.insertAdjacentHTML('afterbegin', "Вы набрали: " + this.score + " очков!");
    },
    setEvents: function() {
        // Частота с которой вызывается функция move, отвечающая в том числе и за движение змеи
        this.intervalId = setInterval(this.move.bind(this), 500);
        document.addEventListener('keydown', this.changeDirection.bind(this));
    },
    // Управление клавишами, меняем направление движения в зависимости от нажатия клавиши
    changeDirection: function(e) {
        switch (e.keyCode) {
            case 37:
                //влево
                this.direction = {
                    row: 0,
                    col: -1
                };
                break;
            case 38:
                //вверх
                this.direction = {
                    row: -1,
                    col: 0
                };
                break;
            case 39:
                //вправо
                this.direction = {
                    row: 0,
                    col: 1
                };
                break;
            case 40:
                //вниз
                this.direction = {
                    row: 1,
                    col: 0
                };
                break;
            default: // По умолчанию делаем ничего
                break;
        }
    },
    // Проверяет ячейку на границы игрового поля и "змейность", возврат true приводит к гейм овер
    checkCell: function(row, col) {
        // проверяем границы местности за которые переходить нельзя
        if (row < 0 || row >= this.size || col < 0 || col >= this.size || this.isWallCell(row, col)) {
            return false;
        }
        // проверяем что клетка не является самой змеей
        if (this.isSnakeCell(row, col)) {
            return false;
        }

        return true;
    },
    checkWin: function() {
        (this.snake.length >= this.snakeLenghtToWin) ? (this.win()) : null;
    },
    // Завершаем игру
    over: function() {
        alert('Поражение');
        clearInterval(this.intervalId); // прерываем повторяемое действие
    },
    win: function() {
        alert('Победа! Вы удлинили свою змею до ' + this.snake.length + " метров\nИ набрали " + this.score +" очков!");
        clearInterval(this.intervalId); // прерываем повторяемое действие
    },
    // Отвечает за большую часть ключевых событий игры, в том числе и движение змеи являющееся основным игровым действием
    move: function() {
        // смотрим направление движения
        // в зависимости от направления движения
        // определить "голову змеи" и создаем новую голову
        //console.log(this.snake);

        // две строки row и col собирают текущее положение первой ячейки змеи(головы) и прибавляют к нему следующую в зависимости от заданного направления движения
        var row = this.snake[0].row + this.direction.row;
        var col = this.snake[0].col + this.direction.col;

        // если попали на недопустимую клетку - гейм овер
        if (!this.checkCell(row, col)) {
            return this.over();
        }

        // добавить элемент в начало змеи
        this.snake.unshift({ row: row, col: col });

        // удаляем элемент из хвоста змеи - таким образом змея двигается
        if (!this.food || this.food.row != row || this.food.col != col) {
            // еды нет
            this.snake.pop(); //pop: method removes the last element from an array and returns that element. This method changes the length of the array
        } else { // если еда исчезла с карты то значит мы ее съели, таким образом прибавление длины реализуется не отрезанием конца массива в ходе движения
            // иногда не отрисовываются клетки с едой или стеной, не добавляется класс, подозреваю асинхронность
            this.score++;
            this.showScores();
            this.checkWin();
            this.createFood();
            this.createWall();
        }
        // Вызываем функцию расставление классов у ячеек, отвечающую за отображение игровых предметов в браузере
        this.render();
        console.log('move');
    },
    // Первичный пуск всех необходимых игровых функций
    run: function() {
        console.log('run game!');
        this.createBoard();
        this.createSnake();
        this.createFood();
        this.createWall();
        this.showScores();
        this.render();
        this.setEvents();
    }
};

window.addEventListener('load', function() {
    game.run();
});