import React from 'react';
class PokemonDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pokemonDetails: null }
    } 
    componentDidMount() {
        const name = this.props.match.params.name;
        fetch(`https://pokemon-academi-api-grzegorz.herokuapp.com/pokemons/${name}`)
        .then(response => response.json())
        .then(jsonResponse => {
            console.log(jsonResponse);
            this.setState({pokemonDetails: jsonResponse});
        })
    }
    renderPokemon = () => {
        const { image, name, type, ability, hight, waight } = this.state.pokemonDetails;
        return (
            <div>
                <h3>{`name: ${name}`}</h3>
                <h3>{`types: ${type}`}</h3>
                <h3>{`abilities: ${ability}`}</h3>
                <h3>{`height: ${hight}`}</h3>
                <h3>{`weight: ${waight}`}</h3>
                <img src={image}/>
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