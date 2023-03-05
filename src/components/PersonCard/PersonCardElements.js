import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border: 2px solid #d4a1f9;
  border-radius: 15px;
  padding: 1rem;
  animation: shadowMoveBackwards .3s ;
  transition: .3s all ease-in-out;
  
  
  @keyframes shadowMove {
    from {
      transform: translate(0);
    }
    
    to {
      transform: translate(-10px, -5px);
    }
  }
  
  &:hover {
    animation: shadowMove .3s forwards;
    
    box-shadow: 15px 10px 15px #01bf71;
  }
  
  @keyframes shadowMoveBackwards {
    from {
      transform: translate(-10px, -5px);
    }
    
    to {
      transform: translate(0);
    }
  }
`

export const ImgWrapper = styled.div`
  width: 80%;
  height: 60%;
`

export const PersonImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  align-items: center;
`

export const PersonName = styled.h2`
  font-size: 24px;
  background: ${({me}) => (me ? "linear-gradient(180deg, #FE0000 16.66%,\n" +
          "\t\t#FD8C00 16.66%, 33.32%,\n" +
          "\t\t#FFE500 33.32%, 49.98%,\n" +
          "\t\t#119F0B 49.98%, 66.64%,\n" +
          "\t\t#0644B3 66.64%, 83.3%,\n" +
          "\t\t#C22EDC 83.3%);" : '')};
  color: ${({me}) => (me ? "#000" : "#fff")};
`

export const PersonOccupation = styled.p`
  font-size: 16px;
  color: #fff;
`