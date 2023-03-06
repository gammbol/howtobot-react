import React from 'react';
import {
	LessonItem,
	LessonsContainer,
	LessonsList,
	LessonsPanel,
	LessonsPreviewContainer,
	LessonsPreviewWrapper,
	Preview
} from "./LessonsElements";

const Lessons = () => (
	<LessonsContainer>
		<LessonsPanel>
			<LessonsPreviewContainer>
				<LessonsPreviewWrapper>
					<Preview/>
				</LessonsPreviewWrapper>
			</LessonsPreviewContainer>
			<LessonsList>
				<LessonItem>lsjfsljf</LessonItem>
			</LessonsList>
		</LessonsPanel>
	</LessonsContainer>
);

export default Lessons;