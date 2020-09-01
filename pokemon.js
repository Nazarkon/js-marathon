import {generateLog} from "./logsConstructor.js";
import {player2,player1} from "./main.js";

class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`)
    }
}

class Pokemon extends Selectors{
    constructor({name , hp , type , selectors}) {
        super(selectors)
        this.name = name
        this.hp = {
            current: hp,
            total: hp
        };
        this.type = type;
        this.renderHPLife();
    }

    changeHp = (damageCount) => {
        if(this.hp.current <= damageCount){
            this.hp.current -= 0;
            // resetBtnFunction(true)
            alert(`Game over ${this.name}`)
        }else {
            this.hp.current -= damageCount;
            this.name === player2.name ? generateLog(this, player1.name , damageCount) : generateLog(this,player2.name ,damageCount);
        }

        this.renderHPLife();
        this.renderProgressbarHp();
    }

    renderProgressbarHp = () => {
        const { elHP , hp:{current, total}, elProgressbar} = this
        const procent = current / (total / 100);
        elProgressbar.style.width = procent + '%';
    }

    renderHPLife = () => {
        const { elHP , hp:{current, total}} = this
        elHP.innerText = current + '/' + total
    }
}

export default  Pokemon