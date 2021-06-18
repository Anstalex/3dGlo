'use strict';
const pHello = document.querySelector('.hello')
const pDayWeek = document.querySelector('.day-week')
const pTime = document.querySelector('.time')
const pNewYear = document.querySelector('.new-year')

let date = new Date();
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Четверг', 'Пятница', 'Суббота']
const day = date.getDay()
const hours = date.getHours()
const newYear = new Date('01 january 2022')
let timeRemaining = newYear.getTime() - date.getTime()
let dayRemaining = Math.floor(timeRemaining / 86400 / 1000)

if ((hours >= 0 && hours <= 5) || (hours >= 23)) {
    pHello.innerText = 'Доброй ночи'
} else if (hours >= 6 && hours <= 11) {
    pHello.innerText = 'Доброе утро'
} else if (hours >= 12 && hours <= 16) {
    pHello.innerText = 'Добрый день'
} else if (hours >= 17 && hours <= 22) {
    pHello.innerText = 'Добрый вечер'
}
let time = date.toLocaleTimeString('en')
pTime.innerText = `Текущее время: ${time}`

let getTime=()=>{
    date = new Date();
    let time = date.toLocaleTimeString('en')
    pTime.innerText = `Текущее время: ${time}`
}
pDayWeek.innerText = `Сегодня: ${week[day - 1]}`
setInterval(getTime,1000)

pNewYear.innerText = ` До нового года осталось ${dayRemaining} дней`
