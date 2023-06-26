import {
  BtnAllPokemons,
  BtnDeletePokemon,
  BtnPokedex,
  HeaderContainer,
  ImgLogoHeader,
} from "./Style";
import LogoPokemon from "../../assets/logo-pokemon.svg";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <HeaderContainer>
            <ImgLogoHeader src={LogoPokemon} alt="Logo Pokemon" />
            <BtnPokedex onClick={() => goToPokedexPage(navigate)}>
              Pokédex
            </BtnPokedex>
          </HeaderContainer>
        );
      case "/pokedex":
        return (
          <HeaderContainer>
            <BtnAllPokemons onClick={() => goToHomePage(navigate)}>
              Todos Pokémons
            </BtnAllPokemons>
            <ImgLogoHeader src={LogoPokemon} alt="Logo Pokemon" />
          </HeaderContainer>
        );
      default:
        return (
          <HeaderContainer>
            <BtnAllPokemons onClick={() => goToHomePage(navigate)}>
              Todos Pokémons
            </BtnAllPokemons>
            <ImgLogoHeader src={LogoPokemon} alt="Logo Pokemon" />
            <BtnDeletePokemon>Excluir da Pokédex</BtnDeletePokemon>
          </HeaderContainer>
        );
    }
  };

  return <>{renderHeader()}</>;
}

export default Header;
