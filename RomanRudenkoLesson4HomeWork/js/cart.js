'use strict';

/*
2.​      ​Начиная с этого урока, мы начинаем работать с функционалом интернет-магазина. 
Предположим, что у нас есть сущность корзины. Нужно реализовать функционал подсчета 
стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся 
в массиве. 
2.1. Организуйте такой массив для хранения товаров в корзине 
2.2. Организуйте функцию countBasketPrice, которая будет считать стоимость корзины.

					2.1. В прошлом ДЗ Вы реализовали корзину на базе массивов. 
					Какими объектами можно заменить элементы данных массивов? 
					2.2. Реализуйте такие объекты 
2.3. Перенесите функционал подсчета корзины на объектно-ориентированную базу 
*/
// по своей сущности данные о товарах мы берем из базы, посему мы должны прокидывать данные о товаре в функцию

// объект товар, принимаем данные о добавляемом в корзину торваре

// item.id++, item.name = "Кофточка",

let itemsInCart = [
    { id: 0, name: "Белая рубашка", price: 1200, quantity: 2 }, // id просто для красоты, типа база все дела
    { id: 1, name: "Оранжевые штаны", price: 2200, quantity: 1 },
    { id: 2, name: "Серые носки", price: 300, quantity: 2 }
];

// функция которая суммирует добавленные товары и выводит результат
function countBasketPrice(basketArray) {
    let itemName, itemQuantity, itemPriceTotal, cartTotalPrice = 0;
    for (let i = 0; i < basketArray.length; i++) {
        itemName = basketArray[i].name;
        itemQuantity = basketArray[i].quantity;
        itemPriceTotal = basketArray[i].quantity * basketArray[i].price;
        cartTotalPrice += itemPriceTotal;
        console.log("Товар: " + itemName + ", количество: " + itemQuantity + ", подсумма: " + itemPriceTotal)
    }
    console.log("Итого: " + cartTotalPrice);
}

countBasketPrice(itemsInCart);