import React from 'react';
class PokemonDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pokemonDetails: null }
    } 
    componentDidMount() {
        const name = this.props.match.params.name;
        fetch('https://pokemon-academi-api-grzegorz.herokuapp.com/pokemons/${name}')
        .then(response => response.json())
        .then(jsonResponse => {
            console.log(jsonResponse);
            this.setState({pokemonDetails: jsonResponse});
        })
    }
    renderPokemon = () => {
        const { imageUrl, name, types, abilities, height, weight } = this.state.pokemonDetails;
        return (
            <div>
                <h3>{`name: ${name}`}</h3>
                <h3>{`types: ${types}`}</h3>
                <h3>{`abilities: ${abilities}`}</h3>
                <h3>{`height: ${height}`}</h3>
                <h3>{`weight: ${weight}`}</h3>
                <img src={imageUrl}/>
            </div>
        )
    }
    render() {
        return (
            <div>
                <h1>Pokemon details</h1>
                {this.state.pokemonDetails && this.renderPokemon()}
            </div>
        )
    }
}
export default PokemonDetails;