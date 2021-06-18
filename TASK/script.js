'use strict';
const pHello = document.querySelector('.hello')
const pDayWeek = document.querySelector('.day-week')
const pTime = document.querySelector('.time')
const pNewYear = document.querySelector('.new-year')

const date = new Date();
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Четверг', 'Пятница', 'Суббота']
const day = date.getDay()
const time = date.toLocaleTimeString('en')
const hours = date.getHours()
const newYear = new Date('01 january 2022')
let timeRemaining = newYear.getTime()- date.getTime()
let dayRemaining = Math.floor(timeRemaining/86400/1000)

if ((hours >= 0 && hours <= 5)||(hours >= 23)){
    pHello.innerText = 'Доброй ночи'
}else if (hours >= 6 && hours <= 11){
    pHello.innerText = 'Доброе утро'
}else if (hours >= 12 && hours <= 16){
    pHello.innerText = 'Добрый день'
}else if (hours >= 17 && hours <= 22){
    pHello.innerText = 'Добрый вечер'
}
    pDayWeek.innerText = `Сегодня: ${week[day - 1]}`
pTime.innerText = `Текущее время: ${time}`
 pNewYear.innerText =` До нового года осталось ${dayRemaining} дней`
