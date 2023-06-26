import React, { useEffect, useState } from "react";
import {
  Container,
  ContainerNameType,
  Poke,
  Pokemon,
  PokemonId,
  PokemonName,
  ProgressBar,
  StatsDetail,
  StatsMoves,
  Title,
  TypePokemon,
} from "./Style";
import Header from "../Header/Header";
import Tipo1 from "../../assets/Tipo1.svg";
import Tipo2 from "../../assets/Tipo2.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Constants/url";


export const PokemonDetails = () => {
  const parath = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(BASE_URL + "/" + parath.id)
      .then((res) => {
        setPokemon(res.data);
        setLoading();
      })
      .catch((error) => {
        console.log("Erro ao buscar pokemon");
        console.log(error.response);
      });
  }, []);

  console.log(pokemon);

  let move = 0;

  const [loading, setLoading] = useState(true);

  if (loading) {
    return <p> carregando </p>;
  }

  return (
    <>
      <Header />
      <Title>Detalhes</Title>
      <Container>
        <Pokemon>
          <div>
            <img src={pokemon.sprites.front_default} alt="Pokemon" />
          </div>
          <div>
            <img src={pokemon.sprites.back_default} alt="Pokemon" />
          </div>
        </Pokemon>
        <StatsDetail>
          <h2>Base stats</h2>
          {pokemon.stats.map((stat) => {
            return (
              <>
                <p>{stat.stat.name}</p>
                <p>{stat.base_stat}</p>
                <ProgressBar value={stat.base_stat} />
              </>
            );
          })}
        </StatsDetail>
        <StatsMoves>
          <h2>Moves:</h2>
          <div>
            {pokemon.moves.map((moves) => {
              if (move < 4) {
                move++;
                return <p>{moves.move.name}</p>;
              }
            })}
          </div>
        </StatsMoves>
        <ContainerNameType>
          <PokemonId>#{pokemon.id}</PokemonId>
          <PokemonName>
            {pokemon.name &&
              pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </PokemonName>
          <TypePokemon>
            <img src={Tipo1} alt="Tipo" />
            <img src={Tipo2} alt="Tipo" />
          </TypePokemon>
        </ContainerNameType>
        <Poke
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt="Pokemon"
        />
      </Container>
    </>
  );
};
