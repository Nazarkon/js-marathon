import {
    $btnHeight,
    $btnLow,
    $currClickCountHeight,
    $currClickCountLow,
    $btnStart,
    $btnReset,
    $btnShowCount
} from "./variables.js";

import {
    createTextElement
} from "./logsConstructor.js"

import {
    random,
    resetBtnFunction,
} from "./helper.js";

import {
    player1,
    player2,
    objId,
    showClickCount
} from "./main.js";



$btnLow.addEventListener('click', function () {
    const { hp: {current}} = player1;
    if(objId.lowDamage < objId.maxClickCountLowDamage){
        $currClickCountLow.innerHTML = $currClickCountLow.innerHTML - 1;
        player1.changeHp(random(current));
        player2.changeHp(random(current));
    }else{
        const $btn = document.getElementById(id)
        $currClickCountLow.innerHTML = 0;
        $btn.disabled = true
    }
})

$btnHeight.addEventListener('click', function () {
    const { hp: {current}} = player1;
    if(objId.heightDamage < objId.maxClickCountHeightDamage) {
        $currClickCountHeight.innerHTML = $currClickCountHeight.innerHTML - 1;
        player1.changeHp(random(current))
        player2.changeHp(random(current))
    }else{
        const $btn = document.getElementById(id)
        $currClickCountHeight.innerHTML = 0;
        $btn.disabled = true
    }
})

$btnReset.addEventListener('click', function () {
    resetBtnFunction(false)
    player1.hp.current = player1.hp.total;
    player2.hp.current = player2.hp.total
    player1.renderHPLife();
    player2.renderHPLife();
    player1.renderProgressbarHp();
    player2.renderProgressbarHp();
    $currClickCountHeight.innerHTML = objId.maxClickCountHeightDamage;
    $currClickCountLow.innerHTML = objId.maxClickCountLowDamage;
});

$btnStart.addEventListener('click',function () {
    resetBtnFunction(false)
    objId.heightDamage = 0;
    objId.lowDamage = 0;
    $currClickCountHeight.innerHTML = objId.maxClickCountHeightDamage;
    $currClickCountLow.innerHTML = objId.maxClickCountLowDamage;
})
$btnShowCount.addEventListener('click', function () {
    createTextElement(showClickCount(),'countLog')
})