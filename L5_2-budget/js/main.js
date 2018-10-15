'use strict';

 
 // Получить кнопку "Начать расчет" через id
let startCalc = document.getElementById('start');


//  Получить все блоки в правой части программы через классы
// (которые имеют класс название-value, начиная с <div class="budget-value"></div>
// и заканчивая <div class="yearsavings-value"></div>)
// let resultValues = document.body.getElementsByClassName('result-table')[0].querySelectorAll('[class*="value"]');
// console.log(resultValues);
let budgetValue = document.body.getElementsByClassName('budget-value')[0];
let daybudgetValue = document.body.getElementsByClassName('daybudget-value')[0];
let levelValue = document.body.getElementsByClassName('level-value')[0];
let expensesValue = document.body.getElementsByClassName('expenses-value')[0];
let optionalexpensesValue = document.body.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.body.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.body.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.body.getElementsByClassName('yearsavings-value')[0];


// Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expenses = document.body.getElementsByClassName('expenses-item');

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
let allBtns = document.body.getElementsByTagName('button');
let applyBtn0 = allBtns[0];
let applyBtn1 = allBtns[1];
let calcBtn0 = allBtns[2];
// let calcBtn1 = allBtns[3];

// console.log(allBtns);


//  Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
let optExpenses = document.querySelectorAll('.optionalexpenses-item');
// console.log(optExpenses);


// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let income = document.body.querySelector('.choose-income');
let haveSavings = document.querySelector('#savings');
let sum = document.body.querySelector('#sum');
let percent = document.body.querySelector('#percent');
let yearValue = document.body.querySelector('.year-value');
let monthValue = document.body.querySelector('.month-value');
let dayValue = document.body.querySelector('.day-value');

