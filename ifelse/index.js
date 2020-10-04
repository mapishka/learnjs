//Task 1 if (строка с нулём)
//Выведется ли alert? - да потому что строка "0" это true
if ("0") {
    alert( 'Привет' );
  }

//Task 2 Название JavaScript
//Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

//Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
//let name = prompt ('Какое «официальное» название JavaScript?', '');

if (name == 'ECMAScript'){
    alert ('Верно!')
}
    else {
        alert ('Не знаете? ECMAScript!')
    };

    //Task 3 Покажите знак числа
    //Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

//1, если значение больше нуля,
//-1, если значение меньше нуля,
//0, если значение равно нулю.
//Предполагается, что пользователь вводит только числа.

let number = prompt ('Число','');
if (number > 0) {
    alert ('1');
} else if (number < 0){
    alert ('-1');
} else if (number == 0){
    alert ('0')
};


//Task 4
//Перепишите 'if' в '?'
//let result;

//if (a + b < 4) {
  //result = 'Мало';
//} else {
  //result = 'Много';
//}

let a;
let b;
let result = (a + b < 4) ? 'Мало' : 'Много';

//Task 5
//Перепишите 'if..else' в '?'

//let message;

//if (login == 'Сотрудник') {
    //message = 'Привет';
  //} else if (login == 'Директор') {
   // message = 'Здравствуйте';
  //} else if (login == '') {
   // message = 'Нет логина';
  //} else {
   // message = '';
  //}


let usertype = prompt ("Кто вы?");
let message = (usertype == "Сотрудник")? "Привет" : 
(usertype == "Директор")? 'Здравствуйте':
(usertype == '')? 'Нет логина' : "";
alert( message );


