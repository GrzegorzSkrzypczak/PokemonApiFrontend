import React from 'react';
class PokemonList extends React.Component {
    componentDidMount() {
        fetch('https://pokemon-academi-api-grzegorz.herokuapp.com/pokemons/list')
        .then(response => {
            console.log(response);
        })
    }
    render() {
        return(
            <h1>Pokemon List!</h1>
        )
    }
}
export default PokemonList;