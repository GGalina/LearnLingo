import React, { useEffect, useState } from 'react';
import { IoBookOutline } from "react-icons/io5";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { fetchTeachers } from '../../services/firebaseAPI';
import { useMediaQuery } from 'react-responsive';
import { Loader } from '../Loader/Loader';
import {
    TeachersContainer,
    TeacherCardsWrapper,
    ImgContainer,
    ProfilePhoto,
    TopInfoContainer,
    MainInfoContainer,
    LessonsContainer,
    Text, Name, TextWrapper,
    Accent, GreyAccent,
    LessonsWrapper,
    TeacherCard, UnderlinedText,
    NameContainer, ReadMoreBtn,
    LoadMore
} from './Teachers.styled';

export const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [lastFetched, setLastFetched] = useState(null);
    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

    const loadMoreTeachers = async () => {
        try {
            setIsLoading(true);

            if (lastFetched === null || lastFetched === undefined) {
                console.error('Error fetching teachers: lastFetched is null or undefined');
                return;
            }

            const newTeachers = await fetchTeachers(lastFetched);

            if (newTeachers.length > 0) {
                setTeachers((prevTeachers) => [...prevTeachers, ...newTeachers]);
                setLastFetched(newTeachers[newTeachers.length - 1].id);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            throw new Error(error);
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        const fetchInitialTeachers = async () => {
            try {
                setIsLoading(true);
                const initialTeachers = await fetchTeachers(null);
                setTeachers(initialTeachers);
                
                if (initialTeachers.length > 0) {
                    const lastFetchedValue = initialTeachers[initialTeachers.length - 1].id;
                    setLastFetched(lastFetchedValue);
                } else {
                    setHasMore(false);
                }
            } catch (error) {
                throw new Error(error)
            } finally {
                setIsLoading(false);
            }
        };
        fetchInitialTeachers();
    }, []);

    return (
        <TeachersContainer>
            <TeacherCardsWrapper>
                {teachers.map((teacher) => (
                    <TeacherCard key={teacher.id}>
                        <ImgContainer>
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
                                    <ReadMoreBtn>Read More</ReadMoreBtn>
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
                                <ReadMoreBtn>Read More</ReadMoreBtn>
                                </MainInfoContainer>
                            </>
                        }
                </TeacherCard>
                ))}
            </TeacherCardsWrapper>

            {hasMore && (
            <LoadMore type='button' onClick={loadMoreTeachers}>
                Load more
            </LoadMore>
            )}

            {isLoading && <Loader/>}
        </TeachersContainer>
    );
};
