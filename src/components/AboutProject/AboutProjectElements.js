import styled from "styled-components";


export const AboutProjectSection = styled.section`
  height: 100vh;
  margin-top: 50px;
  padding-top: 20px;
`
export const AboutProjectContainer = styled.div`
  height: 100%;
  max-width: 1300px;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15%;
`

export const AboutProjectHeading = styled.div`
  text-align: center;
  font-size: 48px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`

export const AboutProjectContentContainer = styled.div`
  padding: 0 20px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
`

export const AboutProjectDescWrapper = styled.div`
  flex-basis: 600px;
`

export const AboutProjectDesc = styled.p`
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const AboutProjectImgWrapper = styled.div`
  flex-grow: 1;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const AboutProjectImg = styled.img`
  width: 100%;
  height: 100%;
`