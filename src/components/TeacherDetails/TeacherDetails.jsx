import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useColor } from '../../context/ColorContext';
import Student from '../../assets/images/Student.png';
import { useModal } from '../../context/ModalContext';
import { TeacherLevels } from '../TeacherLevels/TeacherLevels';
import {
    Text, 
    BookTrial,
    TextDescr,
    GreyAccent, 
    TextWrapper,
    ProfileInfo,
    ProfilePhoto,
    RatingWrapper,
    ReviewWrapper,
    ProfileWrapper,
    ProfilePhotoWrapper,
} from './TeacherDetails.styled';

export const TeacherDetails = ({ teacher }) => {
    const { selectedColor } = useColor();
    const { openBookingModal } = useModal();

    const handleBookTrialClick = () => {
        openBookingModal(teacher);
        document.body.classList.add('no-scroll');
    };

    return (
        <>
            <TextWrapper>
                <TextDescr>{teacher.experience}</TextDescr>
            </TextWrapper>
            {teacher.reviews.map((review, index) => (
                <ReviewWrapper key={index} >
                    <ProfileWrapper>
                        <ProfilePhotoWrapper  $selcolor={selectedColor}>
                            <ProfilePhoto src={Student} alt="User profile photo"/>
                        </ProfilePhotoWrapper>

                        <ProfileInfo>
                            <GreyAccent>{review.reviewer_name}</GreyAccent>
                            <RatingWrapper>
                                <FaStar fill='#FFC531'/>
                                <Text>{review.reviewer_rating.toFixed(1)}</Text>
                            </RatingWrapper>
                        </ProfileInfo>

                    </ProfileWrapper>
                    <Text>{review.comment}</Text>
                </ReviewWrapper>
            ))}
            <TeacherLevels levels={teacher.levels} />
            <BookTrial type="button" $selcolor={selectedColor} onClick={handleBookTrialClick}>
                Book trial lesson
            </BookTrial>
        </>
    );
};


