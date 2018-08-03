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
                
            })
        }
    
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


    
