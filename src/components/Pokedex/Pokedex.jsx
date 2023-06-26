import PokemonCard from "../PokemonCard/PokemonCard";
import Header from "../../components/Header/Header";
import { Container, Title } from "./Style";
import { BASE_URL } from "../Constants/url";

function PokedexPage(props) {
  const { pokedex, removeFromPokedex } = props;

  return (
    <Container>
      <Header />
      <section>
        <Title>Meus Pokémons</Title>
        {pokedex.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemonUrl={`${BASE_URL}/${pokemon.name}`}
            removeFromPokedex={removeFromPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default PokedexPage;
