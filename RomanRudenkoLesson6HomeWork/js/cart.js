'use strict';
/*
	2) Реализовать модуль корзины. Создать блок товаров и блок корзины. 
	У каждого товара есть кнопка «Купить», при нажатии на которую происходит 
	добавление имени и 	цены товара в блок корзины. Корзина должна уметь 
	считать общую сумму заказа.
*/
window.onload = onPageLoad;
const addToCart = document.getElementsByClassName('add-to-cart');
const cartBlock = document.querySelector('.cart-hidden');
const cartDiv = document.querySelector('.cart');
const itemsNames = document.querySelector('.item-name-column');
const cartNames = document.querySelector('.cart-name-column');
const itemsPrices = document.querySelector('.item-price-column');
const cartPrices = document.querySelector('.cart-price-column');
const itemsBuys = document.querySelector('.item-buy-column');
const cartTotal = document.querySelector('.cart-total');
//console.log(dataId);

function onPageLoad() {
    goodsList(goods);
}

let goods = [
    { id: 0, name: "Белая рубашка", price: 1200, quantity: 1 }, // id просто для красоты, типа база все дела
    { id: 1, name: "Оранжевые штаны", price: 2200, quantity: 1 },
    { id: 2, name: "Серые носки", price: 300, quantity: 1 }
];

let itemsInCart = [];

// выводит список товаров которые есть в магазине
function goodsList(goods) {
    // вывести товары хранящиеся в goods в блок items-list
    // goods[i].name - название товара ставим в div или span
    // goods[i].price - цена товара ...
    // кнопка addToCart для добавления соответствующего товара в корзину
    let itemDivName, itemDivPrice, addButton, itemName, itemPrice;
    for (let i = 0; i < goods.length; i++) {
        itemName = goods[i].name;
        itemPrice = goods[i].price;
        // создаем строку товара
        itemDivName = document.createElement('div');
        itemDivPrice = document.createElement('div');
        itemsNames.appendChild(itemDivName);
        itemDivName.insertAdjacentHTML('afterbegin', '<span>' + itemName + '</span>');
        itemDivName.className = 'item-name';

        itemsPrices.appendChild(itemDivPrice);
        itemDivPrice.insertAdjacentHTML('afterbegin', '<span>' + itemPrice + ' ₽.</span>');
        itemDivPrice.className = 'item-price';
        //console.log("Товар: " + itemName);

        addButton = document.createElement('button');
        itemsBuys.appendChild(addButton);
        addButton.insertAdjacentHTML('afterbegin', 'Добавить в корзину');
        addButton.className = 'add-to-cart';
        addButton.setAttribute('data-id', i);

        (i === goods.length - 1) ? (addButtonsListeners()) : null; // когда достигнут конец списка товаров, вызываем функцию добавления прослушки событий клика на кнопку

    }

}

// добавляет прослушку нажатий на все имеющиеся кнопки
function addButtonsListeners() {
    Array.from(addToCart).forEach(function(element) { // вешаем прослушку на все кнопки
        element.addEventListener('click', function() {
            // debug
            console.log(element);
            cartBlock.classList.add('cart'); // показываем блок корзины);
            addItemToCart(element.getAttribute('data-id')); // получаем id нажатой кнопки, являющийся и id товара и вызываем функцию добавления в корзину
        });
    });
}

// добавляет товары по 1 шт в корзину(массив itemsInCart)
function addItemToCart(item) {
    // обращаемся к "базе" товаров goods с искомым id
    // перебираем объекты и выбираем с искомым id
    for (let i = 0; i < goods.length; i++) {
        if (goods[i].id == +item) {
            itemsInCart.push(goods[i]); // добавляем объект из goods в itemsInCart

            countCartPrice(itemsInCart); // пересчитываем товары в корзине после добавления нового
            cartList(itemsInCart);
            //debug
            // console.log(goods[i]);
            // console.log(itemsInCart);
        }
    }

}

// функция которая суммирует добавленные товары и выводит результат
function countCartPrice(cartArray) {
    let itemName, itemQuantity, itemPriceTotal, cartTotalPrice = 0;
    for (let i = 0; i < cartArray.length; i++) {
        itemName = cartArray[i].name;
        itemQuantity = cartArray[i].quantity;
        itemPriceTotal = cartArray[i].quantity * cartArray[i].price;
        cartTotalPrice += itemPriceTotal;
        console.log("Товар: " + itemName + ", количество: " + itemQuantity + ", подсумма: " + itemPriceTotal);
    }
    console.log("Итого: " + cartTotalPrice);
    cartTotal.innerHTML = "Итого: " + cartTotalPrice + " ₽"; // выводм сумму на страницу
    return cartTotalPrice;
}

// выводит товары добавленные в корзину
function cartList(cartItems) {
    cartPrices.innerHTML = cartNames.innerHTML = '';

    let itemDivName, itemDivPrice, addButton, itemName, itemPrice;
    for (let i = 0; i < cartItems.length; i++) {
        itemName = cartItems[i].name;
        itemPrice = cartItems[i].price;
        // создаем строку товара
        itemDivName = document.createElement('div');
        itemDivPrice = document.createElement('div');
        cartNames.appendChild(itemDivName);
        itemDivName.insertAdjacentHTML('afterbegin', '<span>' + itemName + '</span>');
        itemDivName.className = 'cart-item-name';

        cartPrices.appendChild(itemDivPrice);
        itemDivPrice.insertAdjacentHTML('afterbegin', '<span>' + itemPrice + ' ₽.</span>');
        itemDivPrice.className = 'cart-item-price';
        //console.log("Товар: " + itemName);

    }

}







// debug
function testFunc() {
    console.log('Функция вызвана');
}