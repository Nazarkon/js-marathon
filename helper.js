import {$gameBtn} from "./variables.js";

function random(num){
    return Math.ceil(Math.random() * num);
}

function resetBtnFunction (currValue) {$gameBtn.forEach(btn => btn.disabled = currValue)}

let getMeRandomElements = function(sourceArray) {
    const result = sourceArray[Math.floor(Math.random() * sourceArray.length)];
    console.log(result,'res')
    return result
}

export { random , resetBtnFunction , getMeRandomElements}