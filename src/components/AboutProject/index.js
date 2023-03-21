import React from 'react';
import Img from "../../images/AboutProject.svg";
import {AboutProjectSection, AboutProjectContainer, AboutProjectHeading, AboutProjectContentContainer, AboutProjectDescWrapper, AboutProjectDesc, AboutProjectImgWrapper, AboutProjectImg} from "./AboutProjectElements";

function AboutProject(props) {
  return (
    <AboutProjectSection>
      <AboutProjectContainer>
        <AboutProjectHeading>О проекте</AboutProjectHeading>
        <AboutProjectContentContainer>
          <AboutProjectDescWrapper>
            <AboutProjectDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aut consequuntur culpa
              debitis ducimus et facilis iste labore, nostrum pariatur quasi velit vitae. Debitis excepturi facere
              obcaecati quas quasi!
            </AboutProjectDesc>
          </AboutProjectDescWrapper>
          <AboutProjectImgWrapper>
            <AboutProjectImg src={Img} alt="Project"/>
          </AboutProjectImgWrapper>
        </AboutProjectContentContainer>
      </AboutProjectContainer>
    </AboutProjectSection>
  );
}

export default AboutProject;