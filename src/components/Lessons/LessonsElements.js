import styled from "styled-components";

export const LessonsContainer = styled.div`
  height: 100vh;
  padding: 30px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const LessonsPanel = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  //box-shadow: 10px 10px 10px lightgray;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  -o-object-fit: cover;
  object-fit: cover;
`

export const LessonsPreviewContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LessonsPreviewWrapper = styled.div`
  width: 60px;
  height: 40px;
`

export const Preview = styled.img`
  width: 100%;
  height: 100%;
`

export const LessonsList = styled.div`
  height: 100%;
  flex-grow: 1;
  border-left: 1px solid lightgray;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const LessonItem = styled.div`
  border-bottom: 1px solid white;
  padding: 15px 0;
  z-index: 0;

  &:hover {
    background: white;
  }
`

