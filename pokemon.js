import {generateLog} from "./logsConstructor.js";
import {player2,player1} from "./btnActions.js";
import {$btnStart,$btnReset,$logs} from "./variables.js";
import {GET_ALL_POKEMONS} from "./config.js"
 
let pokemon = []

class Game {
    getPokemons = async () => {
        const response = await fetch(GET_ALL_POKEMONS);
        const body = await response.json();
        return body
    }

    startGame = async () => {
         pokemon = await this.getPokemons();
    
        if(pokemon.length > 0){
            $btnStart.removeAttribute('disabled')
            $btnReset.setAttribute('disabled','');
        }
    }
}


class Selectors {
    constructor(name) {
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`)
        this.elName = document.getElementById(`name-${name}`);
        this.elImage = document.getElementById(`${name}-img`);
        this.elArea = document.getElementById(`${name}-attack`)
    }
}

class Pokemon extends Selectors{
    constructor({name ,id, hp , type , selectors , img , attacks}) {
        super(selectors)
        this.id = id;
        this.name = name
        this.hp = {
            current: hp,
            total: hp
        };
        this.type = type;
        this.img = img;
        this.attacks = attacks;
        this.selectors = selectors
        this.renderHPLife();
    }

    changeHp = (damageCount) => {
        if(this.hp.current <= damageCount){
            this.hp.current -= 0;
            alert(`Game over ${this.name}`)
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
        const { elHP, elImage , elName , name , hp:{current, total},selectors,img} = this
        elName.innerText = name
        elImage.src = img
        elHP.innerText = current + '/' + total
    }
}

const game = new Game();
game.startGame()

export  { Pokemon, Game , pokemon }