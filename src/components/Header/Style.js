import styled from 'styled-components';

export const HeaderContainer = styled.div`
    background: #FFFFFF;
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const ImgLogoHeader = styled.img`
    width: 17rem;
    height: 7rem;
`

export const BtnPokedex = styled.button`
    background: #33A4F5;
    width: 17rem;
    height: 4rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
`

export const BtnAllPokemons = styled.button`
    width: 17rem;
    height: 4rem;
    border: none;
    font-size: 1.375rem;
    color: black;
    background-color: transparent;
    text-decoration: underline;
    cursor: pointer;
`

export const BtnDeletePokemon = styled.button`
    line-height: 1.5rem;
    background: #FF6262;
    width: 17rem;
    height: 4rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    color: white;
`