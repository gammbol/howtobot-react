import React from 'react';
import {CardContainer, ImgWrapper, PersonImage, ContentContainer, PersonName, PersonOccupation} from "./PersonCardElements";

const PersonCard = (props) => (
  <CardContainer>
    <ImgWrapper>
      <PersonImage src={props.src} />
    </ImgWrapper>
    <ContentContainer>
      <PersonName me={props.me}>{props.name}</PersonName>
      <PersonOccupation>{props.occupation}</PersonOccupation>
    </ContentContainer>
  </CardContainer>
);

export default PersonCard;