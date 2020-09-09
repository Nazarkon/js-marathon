import {$gameBtn} from "./variables.js";
import { player1 } from "./btnActions.js";

function random(num){
    return Math.ceil(Math.random() * num);
}

function resetBtnFunction (currValue) {$gameBtn.forEach(btn => btn.disabled = currValue)}

let getMeRandomElements = function(sourceArray) {
    const result = sourceArray[Math.floor(Math.random() * sourceArray.length)];
    return result
}

function renderListOfButtons(player){
    const { attacks , elArea ,selectors} = player
    elArea.innerHTML = ''
    for(let i =0; i < attacks.length; i++){
        createButton(attacks[i],elArea,selectors)
    }
}

function createButton(item,elArea,selectors){
    const { maxDamage , name ,id} = item
    const $btn = document.createElement('button')
    $btn.classList.add('button')
    $btn.id = `${id}-${selectors}`
    $btn.setAttribute('custom-id',id)
    $btn.innerHTML = `${name} (${maxDamage})`
    elArea.appendChild($btn)

}
export { random , resetBtnFunction , getMeRandomElements , renderListOfButtons}