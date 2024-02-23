import { TeacherCard } from '../TeacherCard/TeacherCard';
import { TeacherCardsWrapper } from './TeachersList.styled';

export const TeachersList = ({ teachers, isDesktop }) => {
    return (
        <TeacherCardsWrapper>
            {teachers.map((teacher) => (
                <TeacherCard key={teacher.id} teacher={teacher} isDesktop={isDesktop} />
            ))}
        </TeacherCardsWrapper>
    );
};
