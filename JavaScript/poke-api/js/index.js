var url = "https://pokeapi.co/api/v2/pokemon"

async function getPokemon() {
    try {
        let response = await fetch(url)
        let data = await response.json()

        esconderBoton(data.previous)

        let pokemonPromises = data.results.map(async (pokemon) => {
            let urlPokemon = await fetch(pokemon.url)
            return urlPokemon.json()
        })

        let pokemonData = await Promise.all(pokemonPromises)
        listarPokemon(pokemonData, data)

    } catch (error) {
        console.error(error)
    }
}

function listarPokemon(pokemonData, data) {
    pokemonData.forEach((datosP, index) => {
        let tipoP = ""
        datosP.types.forEach(tipo => {
            tipoP += `
                <span>${tipo.type.name} &nbsp;</span>
            `
        })
        let div_pokemon = `
            <div class="bg-gradient-to-r from-stone-700 via-stone-800 text-white uppercase to-stone-700 flex justify-between items-center py-2 px-5 bg-gray-200 m-2 rounded-md shadow-md text-start w-[100%]" id="pokemon" onclick="verDatos(${datosP})">
                <div class="flex items-center gap-5">
                    <span>${datosP.id}</span>
                    <div class="flex flex-col">
                        <p class="my-1">${data.results[index].name} &nbsp;</p>
                        <p class="flex">${tipoP}</p>
                    </div>
                </div>
                <div>
                    <img src="${datosP['sprites']['front_default']}" height="20rem" width="100%">
                </div>
            </div>
        `
        document.getElementById("lista").innerHTML += div_pokemon
    })
}

function esconderBoton(data) {
    if (data == null) {
        document.getElementById("anterior").style.display = "none"
    } else{
        document.getElementById("anterior").style.display = "block"
    }
}

async function siguiente(){
    url = await fetch(url)
    let data = await url.json()
    url = data.next
    document.getElementById("lista").innerHTML = ""
    getPokemon()
}

async function anterior(){
    url = await fetch(url)
    let data = await url.json()
    url = data.previous
    document.getElementById("lista").innerHTML = ""
    getPokemon()
}

getPokemon()