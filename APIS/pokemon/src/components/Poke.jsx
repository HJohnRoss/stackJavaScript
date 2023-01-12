import React, { useEffect } from 'react'
import axiose from 'axios'

const Poke = (props) => {
    useEffect(() => {
        axiose.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(response => { props.setAllPokemon(response.data.results) })
    }, [])

    const showPokemon = (e) => {
        e.preventDefault();
        if (props.showPoke === false) {
            props.setShowPoke(true);
        } else {
            props.setShowPoke(false);
        }
    }


    return (
        <>
            <button onClick={showPokemon}>Fetch Pokemon</button>
            {
                props.showPoke ?
                    <div>
                        {
                            props.allPokemon.map((item, i) =>
                                <ul key={i}>
                                    <li>{item.name}</li>
                                </ul>
                            )
                        }
                    </div> : ""
            }
        </>
    )
}

export default Poke;