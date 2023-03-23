import React from "react";
import Img from "../../images/AboutProject.svg";
import {
  AboutProjectContainer,
  AboutProjectContentContainer,
  AboutProjectDesc,
  AboutProjectDescWrapper,
  AboutProjectHeading,
  AboutProjectImg,
  AboutProjectImgWrapper,
  AboutProjectSection,
} from "./AboutProjectElements";

function AboutProject(props) {
  return (
    <AboutProjectSection id="aboutProject">
      <AboutProjectContainer>
        <AboutProjectHeading>О проекте</AboutProjectHeading>
        <AboutProjectContentContainer>
          <AboutProjectDescWrapper>
            <AboutProjectDesc>
              В нашем проекте мы постарались полностью обозреть такую
              современную тенденцию, как создание телеграм-ботов, ведь за
              несколько последних лет она набрала огромную популярность. Таким
              образом, люди, мечтающие создать своего телеграм-бота, смогут
              обойти все вышеперечисленные проблемы.
            </AboutProjectDesc>
            <AboutProjectDesc>
              Аудитория “Telegram” в России стремительно растет, превышая
              отметку в 35 миллионов пользователей. Это говорит о том, что
              использование чат-ботов в этом мессенджере может быть очень
              эффективно как для бизнеса, так и для личного использования.
            </AboutProjectDesc>
            <AboutProjectDesc>
              Так, еще будучи десятиклассниками, мы хотели создать своего
              чат-бота для отслеживания расписания, но это вызвало множество
              трудностей: нашей команде долго пришлось искать нужную информацию
              в разных источниках, изучать официальные документации, разбираться
              в трудностях языка программирования. И чтобы другим людям больше
              не пришлось сталкиваться с такими проблемами, появилась идея
              создать сайт, помогающий создавать телегам-ботов даже тем, кто
              мало знаком с IT-сферой.
            </AboutProjectDesc>
          </AboutProjectDescWrapper>
          <AboutProjectImgWrapper>
            <AboutProjectImg src={Img} alt="Project" />
          </AboutProjectImgWrapper>
        </AboutProjectContentContainer>
      </AboutProjectContainer>
    </AboutProjectSection>
  );
}

export default AboutProject;