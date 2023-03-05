import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
  
  @media screen and (max-width: 768px) {
    height: 150vh;
  }
`

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
`