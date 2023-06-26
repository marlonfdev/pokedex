import styled from "styled-components";

export const Container = styled.div`
  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
    margin-top: 20vh;
  }
`;

export const Title = styled.h2`
  position: absolute;
  left: 3%;;
  top: 12rem;    
  font-size: 2.5rem;
  color: #FFFFFF;
`
