import {$gameBtn} from "./variables.js";

function random(num){
    return Math.ceil(Math.random() * num);
}

const resetBtnFunction = (currValue) =>  $gameBtn.forEach(btn => btn.disabled = currValue);


export { random , resetBtnFunction}