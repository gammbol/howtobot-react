import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    height: auto;
  }
`;

export const CardsContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1100px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
`;

export const AboutHeading = styled.h1`
  text-align: center;
  font-size: 48px;
  color: #fff;
  background-color: #422168;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
