import React from 'react'


const Poke = (props) => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
        .then(response => {
            // not the actual JSON response body but the entire HTTP response
            return response.json();
        }).then(response => {
            // we now run another promise to parse the HTTP response into usable JSON

            props.setAllPokemon(response.results)
        }).catch(err => {
        })
    
    const showPokemon = (e) => {
        e.preventDefault();
        if (props.showPoke === false) {
            props.setShowPoke(true);
        } else {
            props.setShowPoke(false);
        }
        console.log(props.showPoke)
    }


    return (
        <>
            <button onClick={showPokemon}>Fetch Pokemon</button>
            {
                props.showPoke ?
                    <div>
                        {
                            props.allPokemon.map((item, i) =>
                                <div key={i}>
                                    <p>{item.name}</p>
                                </div>
                            )
                        }
                    </div> : ""
            }
        </>
    )
}

export default Poke;