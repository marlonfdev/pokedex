import styled from 'styled-components';
import theme from '../../doc/themes';

export const CardContainer = styled.div`
    background: ${({type})=> theme.colors.backgroundCard[type[0].type.name] };
    border-radius: 0.75rem;
    width: 93%;
    height: 13.7rem;
    margin: 2.5rem auto;
    position: relative;
`;

export const CardImg = styled.img`
    position: absolute;
    width: 10rem;
    height: 12rem;
    top: -3rem;
    right: 1.5rem;
    z-index: 2; 
`

export const PokeBola = styled.img`
    position: absolute;
    width: 13rem;
    height: 13rem;
    right: 0.5rem;
    top: 0rem;
    z-index: 1;
`

export const BtnDetail = styled.button`
    position: absolute;
    left: 0rem;
    bottom: 1rem;
    width: 10rem;
    height: 2.4rem;
    color: #FFFFFF;
    font-size: 1.2rem;
    background-color: transparent;
    border: none;
    text-decoration: underline;
    cursor: pointer;
`

export const BtnGotcha = styled.button`
    position: absolute;
    right: 01rem;
    bottom: 1rem;
    width: 10rem;
    height: 2.4rem;
    color: black;
    font-size: 1.2rem;
    background-color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    z-index: 3;
`

export const DeletePokemon = styled.button`
    position: absolute;
    right: 01rem;
    bottom: 1rem;
    width: 10rem;
    height: 2.4rem;
    color: black;
    font-size: 1.2rem;
    background-color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    z-index: 2;
`

export const PokeId = styled.span`
    color: #FFF;
    font-size: 0.9rem;
    margin: 1.7rem;
`

export const PokeName = styled.h2`
    color: #FFF;
    font-size: 1.8rem;
    margin: 1.7rem;
    margin-top: -0.5rem;
`

export const NameId = styled.div`
    padding-top: 1.5rem;
`

export const TypePokemon = styled.div`
    margin-left: 1.7rem;
    margin-top: -1.5rem;
    display: inline-flex;
    gap: 0.5rem;
`