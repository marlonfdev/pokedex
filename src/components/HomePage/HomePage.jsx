import Header from "../../components/Header/Header";
import { Container, Title } from "./Style";
import PokemonCard from "../PokemonCard/PokemonCard";

function HomePage(props) {
  const { pokelist, addToPokedex, pokedex } = props;


  const pokeList = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <Container>
      <Header />
      <Title>Todos Pokémons</Title>
      <section>
        {pokeList().map((pokemon) => (
          <PokemonCard
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default HomePage;
