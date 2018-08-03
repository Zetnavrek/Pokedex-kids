$(document).ready ( () => { 
    //imprimiendo pokemones
    const printData = (pokemons) => {
        pokemons.forEach ((pokemon) => {
            const name = pokemon.pokemon_species.name;
            const image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.entry_number + '.png'; 
            $('#elements').append(template(name, image));
            console.log(pokemon);
        }) 
        
    }
    //
    $('#search').click ( (event) => {
        console.log('boton clickeado');
        event.preventDefault();
        const poke = $('#poke-name').val();
        console.log(poke);
        getPokeByPoke(poke);
    })
    const getPokeByPoke = (poke) => {
        $.ajax({
            url:`https://pokeapi.co/api/v2/pokemon/${poke}`,
            type: 'GET',
            datatype: 'json',
            
        })
        .done ((response) => {
            console.log(response);
            $('#pokemon-container').attr('src', response.sprites.front_shiny);
            $('#print-name').text(response.name);
            $('#weight').text("Weight: " + response.weight);
            
        });
        
    }
    $.ajax({
        url:`https://pokeapi.co/api/v2/pokedex/1/`,
        type: 'GET',
        datatype: 'json',
        
    })
    .done ((response) => {
        console.log(response);
        printData(response.pokemon_entries);
        //printPokemon();
        /*var template=$('#template-character').html();//no cambia
        var $characters= $('#characters-container');
        console.log(template);
        response.data.results.forEach((response) => {
            var data= {
                name: response.name,
                description: response.sprites.front_shiny,
                profile: "Weight: " + response.weight,
                //url: character.urls[0].url,
            };
            
        });*/
    });
    const template = (name, image) => {
        let t = `<div id= 'elements'><img src='${image}'/><p>${name}</p></div>`;
        return t;
    }
});



