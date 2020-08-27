const $gameBtn = document.querySelectorAll('.game-btn');
const $logs = document.querySelector('#log');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    lowDamage: 30,
    heightDamage: 50,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    changeHP: changeHp,
    renderHPLife: renderHPLife,
    renderProgressbarHp: renderProgressbarHp
}

const enemy = {
    name:'Charmander',
    defaultHP: 100,
    damageHP:100,
    lowDamage: 30,
    heightDamage: 50,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    changeHP: changeHp,
    renderHPLife: renderHPLife,
    renderProgressbarHp: renderProgressbarHp
}

    function changeHp(damageCount){
        if(this.damageHP <= damageCount){
            this.damageHP -= 0;
            resetBtnFunction(true)
            alert(`Game over ${this.name}`)
        }else {
            this.damageHP -= damageCount;
            this === enemy ? generateLog(this, character.name , damageCount) : generateLog(this,enemy.name ,damageCount);
        }

        this.renderHPLife();
        this.renderProgressbarHp();
    }


    function renderProgressbarHp(){
        this.elProgressbar.style.width = (this.damageHP / 100) * 100 + '%';
    }

    function renderHPLife(){
        this.elHP.innerText = this.damageHP + '/' + this.defaultHP
    }

// Listen for all click events on the page using event delegation
document.addEventListener('click', function (e) {

    if(e.target.id === 'btn-start'){
        resetBtnFunction(false)
        renderHPLife.call(enemy);
        renderProgressbarHp.call(enemy);
    }else if(e.target.id === 'btn-reset'){
        resetBtnFunction(false)
        enemy.defaultHP = 100;
        enemy.damageHP = 100;
        renderProgressbarHp.call(enemy);
        renderHPLife.call(enemy);
    }else{
        giveDamage(e.target.id)
    }

}, false);


// disable btn low damage and height damage
const resetBtnFunction = (currValue) =>  $gameBtn.forEach(btn => btn.disabled = currValue);

// check for btn id and give damage
function giveDamage(id) {
    const { lowDamage , heightDamage } = enemy;
    if(id === 'btn-kick-low'){
        character.changeHP(random(lowDamage))
        enemy.changeHP(random(lowDamage))
    }else if(id === 'btn-kick-height'){
        character.changeHP(random(heightDamage))
        enemy.changeHP(random(heightDamage))
    }
}

function generateLog(firstPerson,secondPersonName,currDamage){
    const { name , defaultHP , damageHP } = firstPerson;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${secondPersonName}, не помня себя от испуга, ударил в предплечье врага.  - ${currDamage} урону [${damageHP} / ${defaultHP}]`,
        `${name} поперхнулся, и за это ${secondPersonName} с испугу приложил прямой удар коленом в лоб врага. - ${currDamage}  урону [${damageHP}/${defaultHP}] `,
        `${name} забылся, но в это время наглый ${secondPersonName}, приняв волевое решение, неслышно подойдя сзади, ударил. - ${currDamage} урону [${damageHP}/${defaultHP}]`,
        `${name} пришел в себя, но неожиданно ${secondPersonName} случайно нанес мощнейший удар. - ${currDamage} урону [${damageHP}/${defaultHP}]`,
        `${name} поперхнулся, но в это время ${secondPersonName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. - ${currDamage} урону [${damageHP}/${defaultHP}]`,
        `${name} удивился, а ${secondPersonName} пошатнувшись влепил подлый удар. - ${currDamage} урону [${damageHP}/${defaultHP}]`,
        `${name} высморкался, но неожиданно ${secondPersonName} провел дробящий удар. - ${currDamage} урону [${damageHP}/${defaultHP}]`,
        `${name} пошатнулся, и внезапно наглый ${secondPersonName} беспричинно ударил в ногу противника - ${currDamage} урону [${damageHP}/${defaultHP}]`,
        `${name} расстроился, как вдруг, неожиданно ${secondPersonName} случайно влепил стопой в живот соперника. - ${currDamage} урону [${damageHP}/${defaultHP}]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${secondPersonName} со скуки, разбил бровь сопернику. - ${currDamage} урону [${damageHP}/${defaultHP}]`
    ];
    renderBattleLog(logs[random(logs.length) - 1])
}

function renderBattleLog(currentValue){
    const arr = []
    arr.push(currentValue)
    for(let i =0; i < arr.length; i++){
        const $p = document.createElement('p');
        $p.innerText = `${arr[i]}`;
       $logs.insertBefore($p,$logs.children[0])
    }
}

// count random damage
function random(num){
    return Math.ceil(Math.random() * num);
}
