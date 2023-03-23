import styled from "styled-components";

export const AboutProjectSection = styled.section`
  height: 100vh;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
export const AboutProjectContainer = styled.div`
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AboutProjectHeading = styled.div`
  text-align: center;
  font-size: 48px;
  color: #fff;

  @media screen and (max-width: 768px) {
    //font-size: 24px;
  }
`;

export const AboutProjectContentContainer = styled.div`
  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 100px;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    gap: 50px;
  }
`;

export const AboutProjectDescWrapper = styled.div`
  flex-basis: 600px;

  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AboutProjectDesc = styled.p`
  color: #fff;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const AboutProjectImgWrapper = styled.div`
  width: 500px;
  height: 500px;

  @media screen and (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
`;

export const AboutProjectImg = styled.img`
  width: 100%;
  height: 100%;
`;
