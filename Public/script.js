const containter = document.querySelector("#Container");
const pokemonCount = 150
colors = {
    fire: '#ff2515',
    grass: '#84ff76',
    electric: '#efdf00',
    water: '#5bcefa',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#e277b6',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors);


const fetchPokemons = async () =>{
    for (let i = 1; i <= pokemonCount; i++){
        await getPokemons(i)
    }
}


const getPokemons = async(id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const resp = await fetch(url)
    const data = await resp.json()
    createCard(data)
}

const createCard = (poke) =>{
    const card = document.createElement('div')
    card.classList.add("pokemon")

    const name = poke.name[0].toUpperCase() + poke.name.slice(1)
    const id = poke.id.toString().padStart(3,'0')
    const types = poke.types.map(type => type.type.name)
    const type = mainTypes.find(type => types.indexOf(type) > -1)
    const color = colors[type]
    card.style.backgroundColor = color

    const pokemonInnerHTML = `
    
        <div class="img">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${poke.id}.gif" alt="${name}"> 
        </div>
        <div class="Dex">
            <span class = "id">#${id}</span>
            <h3 class="name">${name}</h3>
            <span class="type">Type:${type}</span>
        </div>

    `

    card.innerHTML = pokemonInnerHTML
    containter.appendChild(card)
}

fetchPokemons()
