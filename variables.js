const $gameBtn = document.querySelectorAll('.game-btn');
const $logs = document.querySelector('#battle-log');
const $countlogs = document.querySelector('#count-log');
const $currClickCountLow = document.getElementById('click-count-low');
const $currClickCountHeight = document.getElementById('click-count-height');
const $btnLow = document.getElementById('btn-kick-low');
const $btnHeight = document.getElementById('btn-kick-height');
const $btnStart = document.getElementById('btn-start');
const $btnReset = document.getElementById('btn-reset');
const $btnShowCount = document.getElementById('show-count');
const $btnRandomHero = document.getElementById('btn-random-hero');
const $btnRandomEnemy = document.getElementById('btn-random-enemy');
const $hero = document.getElementById('name-character');
const $enemy = document.getElementById('name-enemy');
const $enemyImg = document.getElementById('enemy-img');
const $characterImg = document.getElementById('character-img')

export  {
    $gameBtn ,
    $logs ,
    $countlogs ,
    $currClickCountHeight ,
    $currClickCountLow ,
    $btnHeight ,
    $btnLow,
    $btnReset ,
    $btnStart,
    $btnShowCount,
    $btnRandomEnemy,
    $btnRandomHero,
    $hero,
    $enemy,
    $enemyImg,
    $characterImg,
}