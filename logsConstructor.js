import {$countlogs, $logs} from "./variables.js";
import {random} from "./helper.js";

function generateLog (firstPerson,secondPersonName,currDamage)  {
    const { name , hp:{current, total} } = firstPerson;
    const logs = [
        `${name} вспомнил что-то важное, но неожиданно ${secondPersonName}, не помня себя от испуга, ударил в предплечье врага.  - ${currDamage} урону [${current} / ${total}]`,
        `${name} поперхнулся, и за это ${secondPersonName} с испугу приложил прямой удар коленом в лоб врага. - ${currDamage}  урону [${current}/${total}] `,
        `${name} забылся, но в это время наглый ${secondPersonName}, приняв волевое решение, неслышно подойдя сзади, ударил. - ${currDamage} урону [${current}/${total}]`,
        `${name} пришел в себя, но неожиданно ${secondPersonName} случайно нанес мощнейший удар. - ${currDamage} урону [${current}/${total}]`,
        `${name} поперхнулся, но в это время ${secondPersonName} нехотя раздробил кулаком \<вырезанно цензурой\> противника. - ${currDamage} урону [${current}/${total}]`,
        `${name} удивился, а ${secondPersonName} пошатнувшись влепил подлый удар. - ${currDamage} урону [${current}/${total}]`,
        `${name} высморкался, но неожиданно ${secondPersonName} провел дробящий удар. - ${currDamage} урону [${current}/${total}]`,
        `${name} пошатнулся, и внезапно наглый ${secondPersonName} беспричинно ударил в ногу противника - ${currDamage} урону [${current}/${total}]`,
        `${name} расстроился, как вдруг, неожиданно ${secondPersonName} случайно влепил стопой в живот соперника. - ${currDamage} урону [${current}/${total}]`,
        `${name} пытался что-то сказать, но вдруг, неожиданно ${secondPersonName} со скуки, разбил бровь сопернику. - ${currDamage} урону [${current}/${total}]`
    ];
    renderBattleLog(logs[random(logs.length) - 1])
}

function renderBattleLog(currentValue){
    const arr = []
    arr.push(currentValue)
    for(let i =0; i < arr.length; i++){
        createTextElement(arr[i],'battleLog')
    }
}


function createTextElement(item,whichField){
    const $p = document.createElement('p');
    $p.innerText = `${item}`;
    if(whichField === 'battleLog') {
        $logs.insertBefore($p, $logs.children[0])
    }else{
        $countlogs.appendChild($p)
    }
}

export { generateLog , createTextElement }