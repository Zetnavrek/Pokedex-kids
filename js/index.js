$(document).ready ( () => { 
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
            url:`https://pokeapi.co/api/v2/pokemon/`,
            type: 'GET',
            datatype: 'json',
            
        })
        .done ((response) => {
            console.log(response);
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
});
        /*console.log(response.data);
        const template = $('#template-poke').html();
            
            /*const data = {
            name : getPokeName.name,
            image: 
                    
            });
            });
            
            $('#poke-name').val();
            console.log(getPokeName);
        }
        
    })
    const printData = (data) => {
        let pokemon= "";
        let url = ""; 
        data.forEach ((element) => {
            pokemon = element.images.downsized_large.url;
            url= element.bitly_gif_url;
        $('#elements').append(armarTemplate(gif, url));
        }) */


    
