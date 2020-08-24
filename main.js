const $gameBtn = document.querySelectorAll('.game-btn');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    lowDamage: 30,
    heightDamage: 50,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    changeHP: function (damageCount) {
        if (this.damageHP < damageCount) {
            this.damageHP -= 0;
            alert(`Game over ${this.name}`)
            resetBtnFunction(true)
        } else {
            this.damageHP -= damageCount;
        }
    },
    renderHPLife: function () { this.elHP.innerText = this.damageHP + '/' + this.defaultHP },
    renderProgressbarHp: function () { this.elProgressbar.style.width = (this.damageHP / 100) * 100 + '%';}
}

const enemy = {
    name:'Charmander',
    defaultHP: 100,
    damageHP:300,
    lowDamage: 30,
    heightDamage: 50,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
    changeHP: function (damageCount) {
        if(this.damageHP <= damageCount){
            console.log('1')
            console.log(damageCount,'1')
            this.damageHP -= 0;
            resetBtnFunction(true)
            alert(`Game over ${this.name}`)
        }else {
            console.log('2')
            this.damageHP -= damageCount;
        }

        this.renderHPLife();
        this.renderProgressbarHp();
    },
    renderHPLife: function () { this.elHP.innerText = this.damageHP + '/' + this.defaultHP },
    renderProgressbarHp: function () { this.elProgressbar.style.width = (this.damageHP / 100) * 100 + '%'; }
}

// Listen for all click events on the page using event delegation
document.addEventListener('click', function (e) {

    if(e.target.id === 'btn-start'){
        resetBtnFunction(false)
        enemy.renderHPLife();
        enemy.renderProgressbarHp();
    }else if(e.target.id === 'btn-reset'){
        resetBtnFunction(false)
        enemy.defaultHP = 100;
        enemy.damageHP = 100;
        enemy.renderProgressbarHp();
        enemy.renderHPLife();
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
        enemy.changeHP(random(lowDamage))
    }else if(id === 'btn-kick-height'){
        enemy.changeHP(random(heightDamage))
    }
}

// count random damage
function random(num){
    return Math.ceil(Math.random() * num);
}
