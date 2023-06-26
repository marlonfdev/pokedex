import styled from 'styled-components';

export const Title = styled.h2`
    position: absolute;
    left: 3%;;
    top: 12rem;    
    font-size: 2.5rem;
    color: #FFFFFF;
`;

export const Container = styled.div`
    background-color: #729F92;
    width: 93%;
    height: 67vh;
    border-radius: 3.5vh;
    margin: 23vh auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`

export const Pokemon = styled.div`
    display: flex;
    flex-direction: column;
    width: 16%;
    height: 90%;
    gap: 4vh;
    margin: 5vh;

    div {
        background-color: white;
        border-radius: 0.75rem;
        width: 18rem;
        height: 18rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        height: 14rem;
    }
`

export const StatsDetail = styled.div`
    width: 25%;
    height: 90%;
    border-radius: 0.75rem;
    background: #FFF;
    padding: 2rem;
    display: flex;
    flex-direction: column;

    p {
        
    }
`

export const StatsMoves = styled.div`
    width: 25%;
    height: 65%;
    border-radius: 0.75rem;
    background: #FFF;
    padding: 2rem; 
    margin: 3rem;
    margin-top: 13.3rem;

    p {
        margin-top: 1rem;
        width: 10rem;
        padding: 0.6rem;
        border-radius: 12px;
        border: 1px dashed rgba(0, 0, 0, 0.14);
        background: #ECECEC;
    }
`

export const ContainerNameType = styled.div`
    position: absolute;
    margin-left: 54.5rem;
    margin-bottom: 30rem; 
`

export const PokemonId = styled.span`
    color: #FFF;
    font-size: 1rem;
`

export const PokemonName = styled.h2`
    color: #FFF;
    font-size: 3rem;
    margin-top: -1rem;
`

export const TypePokemon = styled.div`
    display: inline-flex;
    padding: 0.3rem 0.5rem;
    gap: 1rem;
`

export const Poke = styled.img`
    position: absolute;
    right: 5rem;
    top: -8rem;
    height: 40%;
`

export const ProgressBar = styled.div`
    height: 1rem;
    border: 0.2rem solid white;
    display: flex;

    &::before {
        max-width: 100%;
        content: '';
        background-color: hsl(calc(${({value})=>
        value
    } * 0.8), 100%, 45%);
    width: calc(${({value})=>
    value
    } * 1%);
    }
`

