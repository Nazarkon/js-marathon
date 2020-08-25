const $gameBtn = document.querySelectorAll('.game-btn');

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
    damageHP:300,
    lowDamage: 30,
    heightDamage: 50,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
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
        character.changeHP.call(enemy, random(lowDamage))
    }else if(id === 'btn-kick-height'){
        character.changeHP.call(enemy,random(heightDamage))
    }
}

// count random damage
function random(num){
    return Math.ceil(Math.random() * num);
}
