import { alumno, lenguajes, facultad } from "./data.js"

const cardTitle = document.querySelector(".cardTitle");
const uniTitle = document.querySelector(".uniTitle");


cardTitle.textContent = `Hola, me llamo ${alumno.name},
soy alumno de la ${facultad.university}. Me encuentro en segundo año
de la ${facultad.carreer}, actualmente tengo ${alumno.age} años y soy una persona
muy apasionada por la programacion, resolver problemas y crear herramientas 
utiles para el dia a dia. Me encuentro estudiando y creando aplicaciones web, y 
de escritorio, usando ${lenguajes.stack.join(`, `)}`;

uniTitle.textContent = `${facultad.university}`

let uniList = document.querySelector(".uniList");

const listItems = lenguajes.stack.map(item => {
    const li = document.createElement("li");
    li.textContent = item;
    return li;
});

uniList.append(...listItems);
