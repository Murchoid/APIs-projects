const myImg = document.querySelector('img');
let pokemon = 'pikachu';

const myRequest = 'https://pokeapi.co/api/v2/pokemon/' + pokemon;

async function getPic(){
    const response = await fetch(myRequest);
    const data = await response.json();
    const imgSrc = data.sprites.front_default;

    myImg.src = imgSrc;
    console.log(data);
}

getPic();