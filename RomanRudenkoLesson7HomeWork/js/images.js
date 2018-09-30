/*
	1) Доработать функцию замены картинки в галерее таким образом, 
	чтобы она проверяла наличие картинки по указанному в src адресу.
	2) * Добавить в галерею функцию перехода к следующему изображению. 
	По сторонам от большой картинки должны быть стрелки “вперед” и “назад”, 
	по нажатию на которые происходит замена изображения на следующее или предыдущее.
*/
window.onload = onWindowLoad;

function onWindowLoad() {
    var images = document.getElementsByTagName('img');

    for (var i = 0; i < images.length; i++) {
        images[i].onclick = onImageClick;
    }
}

function onImageClick(e) {
    var div = document.getElementById('big_picture');
    div.innerHTML = '';

    var id = e.target.getAttribute('id');
    console.log(id);
    var data = id.split('_'); //image_2 


    // проверка картинки
    var image = new Image();

    image.src = 'img/' + data[1] + '.png';

    // если все в порядке выводим запрошенную картинку
    image.onload = function() {      
        div.appendChild(image);

    };
    // если ошибка то выводим заглушку
    image.onerror = function() {
        var err = document.createElement('img');
        err.src = 'img/error.jpg';

        div.appendChild(err);
    };

}



// проброс событий

function onDocumentClick(e) {
    // e.target - объект, который событие вызвал
    // this - объект, для которого событие заведено - т.е. document
    console.log('document clicked!', e.target, this);
};

document.addEventListener('click', onDocumentClick)

// var el = document.getElementById('parent');
// el.addEventListener('click', function(e) {
//     // e.target - объект, который событие вызвал
//     // this - объект, для которого событие заведено - т.е. div#parent
//     console.log('#parent clicked', e.target, this);
// });


setTimeout(function() {
    console.log('RUN!');
}, 1000);


document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
});