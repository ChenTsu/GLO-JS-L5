'use strict';

// Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'
document.getElementById('currDate').textContent = new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString();


// Напишите функцию, которая будет добавлять 0 перед днями и месяцами,
// которые состоят из одной цифры (из 1.6.2018 сделает 01.06.2018)
document.getElementById('fixDate').addEventListener('click', ()=>{
  let date = document.getElementsByClassName('date')[0];
  let tmp = date.value.split('.');
  if (tmp[0].length < 2) {
    tmp[0] = '0' + tmp[0];
  }
  if (tmp[1].length < 2) {
    tmp[1] = '0' + tmp[1];
  }
  
  date.value = tmp.join('.');
});



// Напишите функцию, которая выводит на страницу текущий день недели на русском языке (реализацию выбираете сами)
let daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
document.getElementById('currDay').textContent = daysOfWeek[new Date().getDay()];


// Напишите функцию, которая выводит на страницу разницу между двумя датами в количестве дней
document.getElementById('calcDays').addEventListener('click', event=>{
  // let firstDay = Date.parse( document.getElementById('day1').value );
  // let secondDay = Date.parse( document.getElementById('day2').value );
  let firstDay = document.getElementById('day1').value.split('.');
  firstDay = new Date(firstDay[2], firstDay[1]-1, firstDay[0]);
  
  let secondDay = document.getElementById('day2').value.split('.');
  secondDay = new Date(secondDay[2], secondDay[1]-1, secondDay[0]);
  
  document.getElementById('dayResult').value = Math.round( (secondDay - firstDay)/1000/60/60/24 );
});
