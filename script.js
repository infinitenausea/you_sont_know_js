'use strict'

// Восстановить порядок книг.
const books = document.querySelectorAll('.book')
books[1].after(books[0]);
books[5].after(books[2]);
books[0].after(books[4]);

// Заменить картинку заднего фона на другую из папки image
 const bodyStyle = document.createElement('style');
 bodyStyle.innerHTML = `
    body {
        background-image: url(./image/you-dont-know-js.jpg);
    }
 `;
 document.head.append(bodyStyle);

 // Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")

 const book3Title = books[4].querySelector('h2 a');
 book3Title.textContent = "Книга 3. this и Прототипы Объектов";

 // Удалить рекламу со страницы

 const advertising = document.querySelector('.adv');
 advertising.remove();

 // Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
 const book2list = books[0].querySelectorAll('li');
 book2list[9].after(book2list[2]);
 book2list[3].after(book2list[6]);
 book2list[6].after(book2list[8]);

 const book5list = books[5].querySelectorAll('li');
 book5list[1].after(book5list[9]);
 book5list[9].after(book5list[3]);
 book5list[3].after(book5list[4]);
 book5list[7].after(book5list[5]);

 // В шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

 const book6ul = books[2].querySelector('ul');
 const book6NewElemList = document.createElement('li');
 book6NewElemList.textContent = "Глава 8: За пределами ES6";
 book6ul.appendChild(book6NewElemList);
 const book6list = books[2].querySelectorAll('li');
 book6list[9].before(book6list[10]);