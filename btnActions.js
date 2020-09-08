import {
    $currClickCountHeight,
    $currClickCountLow,
    $btnStart,
    $btnReset,
    $btnShowCount,
    $areaBtn,
    $logs
} from "./variables.js";

import {
    createTextElement
} from "./logsConstructor.js"

import {
    random,
    resetBtnFunction,
    getMeRandomElements,
    renderListOfButtons
} from "./helper.js";

import {
    objId,
    showClickCount,
} from "./main.js";
import {Pokemon , pokemon} from "./pokemon.js";

let player1;
let player2;


$btnReset.addEventListener('click', function () {
    resetBtnFunction(false)
    $logs.innerHTML = '';
    $btnStart.removeAttribute('disabled')
    $btnReset.setAttribute('disabled','')
    player1.elArea.innerHTML = ''
    player2.elArea.innerHTML = ''
    player1.hp.current = player1.hp.total;
    player2.hp.current = player2.hp.total
    player1.renderHPLife();
    player2.renderHPLife();
    player1.renderProgressbarHp();
    player2.renderProgressbarHp();
});

$btnStart.addEventListener('click',function () {
    resetBtnFunction(false)
    const hero = getMeRandomElements(pokemon)
    player1 = new Pokemon({
        id: hero.id,
        name: hero.name,
        type: hero.type,
        hp: hero.hp,
        img: hero.img,
        attacks: hero.attacks,
        selectors: 'character'
    })
    renderListOfButtons(player1)
    const enemy = getMeRandomElements(pokemon)
    player2 = new Pokemon({
        id: enemy.id,
        name: enemy.name,
        type: enemy.type,
        hp: enemy.hp,
        img: enemy.img,
        attacks: hero.attacks,
        selectors: 'enemy'
        
    })
    renderListOfButtons(player2)
    $btnReset.removeAttribute('disabled');
    $btnStart.setAttribute('disabled','')
})

$areaBtn.addEventListener('click', async function(e){
    const playerOneCustomId =`${e.target.getAttribute('custom-id')}-${player1.selectors}`;
    const playerTwoCustomId = `${e.target.getAttribute('custom-id')}-${player2.selectors}`;
    if(e.target.id === playerOneCustomId){
        const response =  await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${player1.id}&attackId=${e.target.getAttribute('custom-id')}&player2id=${player2.id}`)
        const damage =  await response.json();
        player1.changeHp(damage.kick.player1)
        player2.changeHp(damage.kick.player2)
    }else if(e.target.id === playerTwoCustomId){
        const response =  await fetch(`https://reactmarathon-api.netlify.app/api/fight?player1id=${player2.id}&attackId=${e.target.getAttribute('custom-id')}&player2id=${player1.id}`)
        const damage =  await response.json();
        player1.changeHp(damage.kick.player1)
        player2.changeHp(damage.kick.player2)
    }
})


$btnShowCount.addEventListener('click', function () {
    createTextElement(showClickCount(),'countLog')
})

export {player1,player2}