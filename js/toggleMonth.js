import { monthDays } from './display'
import Display from './display';

const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
let date = new Date();

leftBtn.addEventListener('click', onLeftBtnClick);
rightBtn.addEventListener('click', onRightBtnClick);

function onLeftBtnClick() {
    monthDays.innerHTML = '';
    date = new Date(date.setMonth(date.getMonth() - 1));
    const display = new Display(date);
    display.showCurentMonth();
    display.showDays();
 }

function onRightBtnClick() {
    monthDays.innerHTML = '';
    date = new Date(date.setMonth(date.getMonth() + 1));
    const display = new Display(date);
    display.showCurentMonth();
    display.showDays();
 }