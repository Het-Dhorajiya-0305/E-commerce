

import shoes7 from './assets/shoes7.jpg';
import shoes8 from './assets/shoes8.jpg';
import mint_shoes from './assets/mint_shoes.jpg';
import red_shoes from './assets/red_shoes.jpg';
import black_shoes from './assets/black_shoes.jpg';
import shoes13 from './assets/shoes13.jpg';
import shoes14 from './assets/shoes14.jpg';
import shoes1 from './assets/shoes1.jpg';

import shoes4 from './assets/shoes4.jpg';
import shoes3 from './assets/shoes3.jpg';
import choco_city from './assets/choco_city.jpg';
import shoes2 from './assets/shoes2.jpg';
import green_training from './assets/green_traning.jpg';
import shoes10 from './assets/shoes10.jpg';
import shoes5 from './assets/shoes5.jpg';
import shoes11 from './assets/shoes11.jpg';
import pink_suede from './assets/pink_suede.jpg';
import pink_training from './assets/pink_training.jpg';
import shoes9 from './assets/shoes9.jpg';
import tosca_city from './assets/tosca_city.jpg';

export default function defaultarray(gender) {
    if (gender === "male") {
        const arr = [
            { id: 1, name: "men's navy running", price: 8740, loc: shoes7 },
            { id: 2, name: "men's green running", price: 7480, loc: shoes8 },
            { id: 3, name: "men's classic mint", price: 6720, loc: mint_shoes },
            { id: 4, name: "men's red running", price: 7478, loc: red_shoes },
            { id: 5, name: "men's black running", price: 4789, loc: black_shoes },
            { id: 6, name: "men's earth-tone sneaker", price: 7512, loc: shoes13 },
            { id: 7, name: "men's moonstone sneaker", price: 4980, loc: shoes14 },
            { id: 8, name: "men's classic blue", price: 6218, loc: shoes1 },
        ];
        return arr;
    } else if (gender === "female") {
        const arr2 = [
            { id: 1, name: "women blue training", price: 5102, loc: shoes4 },
            { id: 2, name: "women candy city run", price: 4850, loc: shoes3 },
            { id: 3, name: "women choco city run", price: 7850, loc: choco_city },
            { id: 4, name: "women cream suede", price: 6410, loc: shoes2 },
            { id: 5, name: "women green training", price: 4816, loc: green_training },
            { id: 6, name: "women mint sneaker", price: 5840, loc: shoes10 },
            { id: 7, name: "women orange sneaker", price: 7405, loc: shoes5 },
            { id: 8, name: "women peach training", price: 6712, loc: shoes11 },
            { id: 9, name: "women pink suede", price: 4586, loc: pink_suede },
            { id: 10, name: "women pink training", price: 4503, loc: pink_training },
            { id: 11, name: "women tan sneaker", price: 8540, loc: shoes9 },
            { id: 12, name: "women tosca city run", price: 8450, loc: tosca_city },
        ];
        return arr2;
    }
}
