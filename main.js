let $btn;
const $gameBtn = document.querySelectorAll('.game-btn');


const character = {
    name:'Pikachu',
    defaultHP:100,
    damageHP:100,
    lowDamage: 30,
    heightDamage: 50,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
}

const enemy = {
    name:'Charmander',
    defaultHP: 100,
    damageHP:100,
    lowDamage: 30,
    heightDamage: 50,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
}
const resetBtnFunction = (currValue) =>  $gameBtn.forEach(btn => btn.disabled = currValue);

function giveDamage(e) {
    const { lowDamage , heightDamage } = character;

    $btn = document.getElementById(e.target.id);

    if($btn.id === 'btn-kick-low'){

        changeHP(random(lowDamage), enemy)

    }else if($btn.id === 'btn-kick-height'){

        changeHP(random(heightDamage), enemy)
    }
}


function init(e) {
    if(e.target.id === 'btn-start'){
        resetBtnFunction(false)
        renderHP(character)
        renderHP(enemy)
    }else if(e.target.id === 'btn-reset'){
        resetBtnFunction(false)
        enemy.defaultHP = 100;
        enemy.damageHP = 100;
        renderProgressbarHp(enemy)
        renderHPLife(enemy)
    }
}

function renderHP(person) {
    renderHPLife(person)
    renderProgressbarHp(person)
}

function renderHPLife(person){
    person.elHP.innerText = person.damageHP + '/' + person.defaultHP
}

function renderProgressbarHp(person){
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person){
    if(person.damageHP < count){
        person.damageHP -= 0;
        alert(`Game over ${person.name}`)
        resetBtnFunction(true)
    }else {
        person.damageHP -= count;
    }
    renderHP(person)
}

function random(num){
    return Math.ceil(Math.random() * num);
}
