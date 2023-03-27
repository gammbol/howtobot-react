import React from "react";
import { projectData } from "./AboutProjectData";
import { tgData } from "./AboutTgData";
import {
  AboutProjectContainer,
  AboutProjectContentContainer,
  AboutProjectDesc,
  AboutProjectDescWrapper,
  AboutProjectHeading,
  AboutProjectImg,
  AboutProjectImgWrapper,
  AboutProjectSection,
} from "./AboutSmthElements";

function AboutProject(props) {
  const choicer = {
    project: projectData,
    tg: tgData,
  };

  return (
    <AboutProjectSection id="aboutProject">
      <AboutProjectHeading>{choicer[props.data].heading}</AboutProjectHeading>
      <AboutProjectContainer>
        <AboutProjectContentContainer direction={props.direction}>
          <AboutProjectDescWrapper>
            {choicer[props.data].desc.map((item, index) => {
              return <AboutProjectDesc key={index}>{item}</AboutProjectDesc>;
            })}
          </AboutProjectDescWrapper>
          <AboutProjectImgWrapper>
            <AboutProjectImg src={choicer[props.data].img} alt="Project" />
          </AboutProjectImgWrapper>
        </AboutProjectContentContainer>
      </AboutProjectContainer>
    </AboutProjectSection>
  );
}

export default AboutProject;
