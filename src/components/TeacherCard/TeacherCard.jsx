import React, { useState } from 'react';
import { IoBookOutline } from 'react-icons/io5';
import { useAuth } from '../../context/AuthContext';
import { useColor } from '../../context/ColorContext';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import { TeacherLevels } from '../TeacherLevels/TeacherLevels';
import { TeacherDetails } from '../TeacherDetails/TeacherDetails';
import { useFavoriteTeachers } from '../../context/FavoriteTeachersContext';
import {
    Name,
    Text,
    Accent,
    HeartWrap,
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
import { useModal } from '../../context/ModalContext';

export const TeacherCard = ({ teacher, isDesktop }) => {
    const { isLoggedIn } = useAuth();
    const { selectedColor } = useColor();
    const { openNonAuthModal } = useModal();
    const [showDetails, setShowDetails] = useState(false);
    const { isFavorite, addToFavorites, removeFromFavorites } = useFavoriteTeachers();

    const handleShowDetails = () => {
        setShowDetails(true);
    };

    const handleToggleFavorite = async () => {
        try {
            if (!isLoggedIn) {
                openNonAuthModal();
            } else {
                if (isFavorite(teacher.id)) {
                    await removeFromFavorites(teacher.id);
                } else {
                    await addToFavorites(teacher.id);
                }
            }
        } catch (error) {
            console.error('Error toggling favorite status:', error);
        }
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
                <HeartWrap onClick={handleToggleFavorite}>
                    {isFavorite(teacher.id) ?
                        <FaHeart width='26' height='26' fill={selectedColor} /> :
                        <FaRegHeart width='26' height='26' fill='#121417' />
                    }
                </HeartWrap>
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
                        <UnderlinedText>{teacher.languages ? teacher.languages.join(', ') : ''}</UnderlinedText>
                        </TextWrapper>
                        <TextWrapper>
                            <GreyAccent>Lesson Info: </GreyAccent>
                            <Text>{teacher.lesson_info}</Text>
                        </TextWrapper>
                        <TextWrapper>
                            <GreyAccent>Conditions: </GreyAccent>
                            <Text>{teacher.conditions ? teacher.conditions.join(' ') : ''}</Text>
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
