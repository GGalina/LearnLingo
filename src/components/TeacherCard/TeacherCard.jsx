import React, { useState } from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { useColor } from '../../context/ColorContext';
import { TeacherLevels } from '../TeacherLevels/TeacherLevels';
import { TeacherDetails } from '../TeacherDetails/TeacherDetails';
import {
    Name,
    Text,
    Accent,
    GreyAccent,
    ImgContainer,
    ProfilePhoto,
    ReadMoreBtn,
    TextWrapper,
    NameContainer,
    LessonsWrapper,
    UnderlinedText,
    TeacherCardWrap,
    LessonsContainer,
    TopInfoContainer,
    MainInfoContainer
} from './TeacherCard.styled';

export const TeacherCard = ({ teacher, isDesktop }) => {
    const [showDetails, setShowDetails] = useState(false);
    const { selectedColor } = useColor();

    const handleShowDetails = () => {
        setShowDetails(true);
    };

    return (
        <TeacherCardWrap key={teacher.id}>
            <ImgContainer $selcolor={selectedColor}>
                <ProfilePhoto src={teacher.avatar_url} alt="User profile photo"/>
            </ImgContainer>
            <TopInfoContainer>
                <LessonsWrapper>
                    <LessonsContainer>
                        <IoBookOutline stroke='#121417' width='16' height='16'/>
                        <Text>Lessons online</Text>
                    </LessonsContainer>
                    <LessonsContainer>
                        <Text>Lessons done: {teacher.lessons_done}</Text>
                    </LessonsContainer>
                    <LessonsContainer>
                        <FaStar fill='#FFC531'/>
                        <Text>Rating: {teacher.rating}</Text>
                    </LessonsContainer>
                    <LessonsContainer>
                        <Text>Price / 1 hour: <Accent>{teacher.price_per_hour}$</Accent></Text>
                    </LessonsContainer> 
                </LessonsWrapper>
                <FaRegHeart width='26' height='26' fill='#121417'/>
            </TopInfoContainer>
            
            {!isDesktop &&
                <>
                    <NameContainer>
                        <GreyAccent>Languages</GreyAccent>
                        <Name>{teacher.name + ' ' + teacher.surname}</Name>
                    </NameContainer>
                    <MainInfoContainer>
                        <TextWrapper>
                            <GreyAccent>Speaks: </GreyAccent>
                            <UnderlinedText>{teacher.languages.join(', ')}</UnderlinedText>
                        </TextWrapper>
                        <TextWrapper>
                            <GreyAccent>Lesson Info: </GreyAccent>
                            <Text>{teacher.lesson_info}</Text>
                        </TextWrapper>
                        <TextWrapper>
                            <GreyAccent>Conditions: </GreyAccent>
                            <Text>{teacher.conditions.join(' ')}</Text>
                    </TextWrapper>
                    {showDetails && <TeacherDetails teacher={teacher} />}
                    <ReadMoreBtn $showdetails={showDetails} onClick={handleShowDetails}>
                        {showDetails ? 'Read Less' : 'Read More'}
                    </ReadMoreBtn>
                    {!showDetails && <TeacherLevels levels={teacher.levels} />}
                    </MainInfoContainer>
                </>
            }

            {isDesktop && 
                <>
                    <MainInfoContainer>
                        <NameContainer>
                            <GreyAccent>Languages</GreyAccent>
                            <Name>{teacher.name + ' ' + teacher.surname}</Name>
                        </NameContainer>
                        <TextWrapper>
                            <GreyAccent>Speaks: </GreyAccent>
                            <UnderlinedText>{teacher.languages.join(', ')}</UnderlinedText>
                        </TextWrapper>
                        <TextWrapper>
                            <GreyAccent>Lesson Info: </GreyAccent>
                            <Text>{teacher.lesson_info}</Text>
                        </TextWrapper>
                        <TextWrapper>
                            <GreyAccent>Conditions: </GreyAccent>
                            <Text>{teacher.conditions.join(' ')}</Text>
                        </TextWrapper>
                    {showDetails && <TeacherDetails teacher={teacher} />}
                        <ReadMoreBtn $showdetails={showDetails} onClick={handleShowDetails}>
                            {showDetails ? 'Read Less' : 'Read More'}
                        </ReadMoreBtn>
                        {!showDetails && <TeacherLevels levels={teacher.levels} />}
                    </MainInfoContainer>
                </>
            }
        </TeacherCardWrap>
    );
};
