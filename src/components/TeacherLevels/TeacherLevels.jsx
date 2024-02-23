import { TeacherLevelsWrapper, Level } from './TeacherLevels.styled';

export const TeacherLevels = ({ levels }) => {
    return (
        <TeacherLevelsWrapper>
            {levels.map((level, index) => (
                <Level key={index}>{level}</Level>
            ))}
        </TeacherLevelsWrapper>
    );
};