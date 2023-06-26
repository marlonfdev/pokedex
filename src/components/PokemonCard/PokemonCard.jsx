import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPokemonDetails } from "../../routes/coordinator";
import {
  BtnDetail,
  BtnGotcha,
  CardContainer,
  CardImg,
  DeletePokemon,
  NameId,
  PokeBola,
  PokeId,
  PokeName,
  TypePokemon,
} from "./Style";
import Ball from "../../assets/pokebola.svg";
import Types from "../../doc/types";

function PokemonCard(props) {
  const { pokemonUrl, addToPokedex, removeFromPokedex } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
      setLoading(false);
      setTypes(response.data.types.map((type) => type.type.name));
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  console.log(pokemon);

  if (loading) {
    return <p></p>;
  }

  return (
    <CardContainer type={pokemon.types}>
      <CardImg
        src={pokemon.sprites?.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <PokeBola src={Ball} alt="Pokebola" />
      <NameId>
        <PokeId>#{pokemon.id}</PokeId>
        <PokeName>
          {pokemon.name &&
            pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </PokeName>
      </NameId>
      {location.pathname === "/" ? (
        <BtnGotcha onClick={() => addToPokedex(pokemon)}>Capturar!</BtnGotcha>
      ) : (
        <DeletePokemon onClick={() => removeFromPokedex(pokemon)}>
          Excluir
        </DeletePokemon>
      )}
      <BtnDetail onClick={() => goToPokemonDetails(navigate, pokemon.id)}>
        Detalhes
      </BtnDetail>
      <TypePokemon>
        {types.map((type, index) => (
          <img key={index} src={Types[type]} alt={type} />
        ))}
      </TypePokemon>
    </CardContainer>
  );
}

export default PokemonCard;
