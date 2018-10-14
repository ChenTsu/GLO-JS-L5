'use strict';


//  Восстановить порядок в меню, добавить пятый пункт
let siteMenu = document.body.getElementsByClassName('menu')[0];
let menuEls = siteMenu.getElementsByClassName('menu-item');

siteMenu.insertBefore(menuEls[1], menuEls[3]);

menuEls = document.createElement('li');
menuEls.classList.add("menu-item");
menuEls.textContent = 'Новый пункт';

siteMenu.appendChild(menuEls);


//  Заменить картинку заднего фона на другую из папки img
document.body.style.background = 'url(img/apple_true.jpg) center center no-repeat';



// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple';


//  Удалить рекламу со страницы
let advs = document.body.getElementsByClassName('adv');
// console.log(advs);

for (let i=0; i<advs.length; i++){
  // document.removeChild(advs[i]);
  advs[i].remove();
}


// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let loyalty = document.getElementById('prompt');

loyalty.textContent = prompt('Как вы относитесь к технике Apple?', '');