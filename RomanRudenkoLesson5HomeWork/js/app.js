'use strict';

/*
1) Создать функцию, генерирующую шахматную доску. При этом можно использовать 
любые html-теги по своему желанию. Доска должна быть разлинована соответствующим 
образом, т.е. чередовать черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, 
столбцы – латинскими буквами A, B, C, D, E, F, G, H.
2) Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, 
например К-король, Ф – ферзь и тп., причем все фигуры должны стоять на своих 
местах и быть соответственно черными и белыми.
*/

//
//
//

// Шахматная доска это поле 8х8 состоящее из 64 клеток
/*
8| -4 -2 -3 -5 -6 -3 -2 -4
7| -1 -1 -1 -1 -1 -1 -1 -1
6|  0  0  0  0  0  0  0  0
5|  0  0  0  0  0  0  0  0
4|  0  0  0  0  0  0  0  0
3|  0  0  0  0  0  0  0  0
2|  1  1  1  1  1  1  1  1 
1|  4  2  3  5  6  3  2  4
  -------------------------
   1  2  3  4  5  6  7  8
*/

let playerOne;
let playerTwo;

let cells = {};
// фигуры
cells.A1 = {
    class: "fas fa-chess-rook black", // class из библиотеки font awesome 5
};
cells.B1 = {
    class: "fas fa-chess-knight black",
};
cells.C1 = {
    class: "fas fa-chess-bishop black",
};
cells.D1 = {
    class: "fas fa-chess-king black",
};
cells.E1 = {
    class: "fas fa-chess-queen black",
};
cells.F1 = {
    class: "fas fa-chess-bishop black",
};
cells.G1 = {
    class: "fas fa-chess-knight black",
};
cells.H1 = {
    class: "fas fa-chess-rook black",
};

// пешки
cells.A2 = {
    class: "fas fa-chess-pawn black",
};
cells.B2 = {
    class: "fas fa-chess-pawn black",
};
cells.C2 = {
    class: "fas fa-chess-pawn black",
};
cells.D2 = {
    class: "fas fa-chess-pawn black",
};
cells.E2 = {
    class: "fas fa-chess-pawn black",
};
cells.F2 = {
    class: "fas fa-chess-pawn black",
};
cells.G2 = {
    class: "fas fa-chess-pawn black",
};
cells.H2 = {
    class: "fas fa-chess-pawn black",
};


// пустые ячейки
cells.A3 = {};
cells.B3 = {};
cells.C3 = {};
cells.D3 = {};
cells.E3 = {};
cells.F3 = {};
cells.G3 = {};
cells.H3 = {};

cells.A4 = {};
cells.B4 = {};
cells.C4 = {};
cells.D4 = {};
cells.E4 = {};
cells.F4 = {};
cells.G4 = {};
cells.H4 = {};

cells.A5 = {};
cells.B5 = {};
cells.C5 = {};
cells.D5 = {};
cells.E5 = {};
cells.F5 = {};
cells.G5 = {};
cells.H5 = {};

cells.A6 = {};
cells.B6 = {};
cells.C6 = {};
cells.D6 = {};
cells.E6 = {};
cells.F6 = {};
cells.G6 = {};
cells.H6 = {};

// пешки
cells.A7 = {
    class: "fas fa-chess-pawn white",
};
cells.B7 = {
    class: "fas fa-chess-pawn white",
};
cells.C7 = {
    class: "fas fa-chess-pawn white",
};
cells.D7 = {
    class: "fas fa-chess-pawn white",
};
cells.E7 = {
    class: "fas fa-chess-pawn white",
};
cells.F7 = {
    class: "fas fa-chess-pawn white",
};
cells.G7 = {
    class: "fas fa-chess-pawn white",
};
cells.H7 = {
    class: "fas fa-chess-pawn white",
};

// фигуры
cells.A8 = {
    class: "fas fa-chess-rook white", // class из библиотеки font awesome 5
};
cells.B8 = {
    class: "fas fa-chess-knight white",
};
cells.C8 = {
    class: "fas fa-chess-bishop white",
};
cells.D8 = {
    class: "fas fa-chess-king white",
};
cells.E8 = {
    class: "fas fa-chess-queen white",
};
cells.F8 = {
    class: "fas fa-chess-bishop white",
};
cells.G8 = {
    class: "fas fa-chess-knight white",
};
cells.H8 = {
    class: "fas fa-chess-rook white",
};

const board = document.querySelector('.board-container');
let square, icon, cell;
let colorSwitch = 0;
let i, l = 0,
    d = 0; // l счетчик букв, d счетчик цифр

let letters = ['A', 'B', 'C', 'D', 'E', 'F', "G", 'H'];

for (i = 1; i <= 64; i++) { // 


    colorSwitch += (++colorSwitch % 9) ? 1 : 2; // перепрыгиваем одно число в конце строки меняя тем самым последовательность цветов с новой строки
    // debug
    console.log("colorSwitch: " + colorSwitch);

    square = document.createElement('div'); // определяем блок
    board.appendChild(square); // добавляем блок в блок
    square.className = (colorSwitch % 2 === 0) ? "square square-black" : "square square-white"; // четные черные, остальные белые

    // Расставляем фигуры в клетки доски
    /* Вставить в нужную клетку нужную фигуру:
    Нужная клетка это клетка с индексом, например А1
    Что бы определить клетку А1, нужен цикл, который 
    пройдет по массиву с буквами A-H и по ряду цифр 1-8.
    
    Есть у нас объект обозначающий клетку на доске, А1 
    одновременно это и ее индекс, т.е. положение на доске
    A1 хранит в себе class отвечающий за отображение фигуры на доске.

    Что бы в клетку А1 вставить данные:
    Нам нужно выбрать правильное свойство объекта cells.
    Выбираем А, затем 1, получается строка A1, далее мы обращаемся к объекту cells.А1.class
    и добавляем этот class тегу <i>.
      */
    icon = document.createElement('i'); //  определяем icon
    square.appendChild(icon); // добавляем icon в клетку(div блок)
    // теперь нужно icon добавить класс, класс хранится в объекте cells.A1
    (l % 8) ? l = l: (l = 0, d++); // сбрасываем счетчик букв когда подходим к 8 и переходим на новый ряд
    cell = letters[l] + d;
    l++; // счетчик для индексов букв
    // debug
    console.log(cell);
    icon.className = cells[cell].class;
}

// Поля по краям доски
let xnavBlock, ynavBlock;
let xNav = document.querySelector('.x-nav');
let yNav = document.querySelector('.y-nav');
let j;
for (j = 0; j < 8; j++) {
    xnavBlock = document.createElement('div');
    xnavBlock.innerHTML = letters[j];

    xNav.appendChild(xnavBlock);
    xnavBlock.className = "x-nav__block";
}

for (j = 8; j > 0; j--) {
    xnavBlock = document.createElement('div');
    xnavBlock.innerHTML = j;

    yNav.appendChild(xnavBlock);
    xnavBlock.className = "y-nav__block";

}