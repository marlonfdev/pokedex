export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToPokedexPage = (navigate) => {
  navigate("/pokedex");
};

export const goToPokemonDetails = (navigate, id) => {
  navigate(`/details/${id}`);
};
