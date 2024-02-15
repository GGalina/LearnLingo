import styled from 'styled-components';

export const TeachersContainer = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    background-color: #EEEEEE;
    padding: 32px;

    @media (min-width: 480px) {
        width: 480px; 
    }

    @media (min-width: 768px) {
        width: 768px;
        padding: 64px 32px;
    }

    @media (min-width: 1280px) {
        width: 1280px;
        padding: 96px 128px;
    }
`;

export const TeacherCardsWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;
`;

export const TeacherCard = styled.div`
    border: 1px solid #FFFFFF;
    border-radius: 24px;
    background-color: #FFFFFF;
    padding: 24px 18px ;
    position: relative;

    @media (min-width: 768px) {
        padding: 50px 24px 24px 24px;
        display: flex;
        flex-wrap: wrap; 
        justify-content: space-between;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        gap: 14px;
    }

    @media (min-width: 1280px) {
        padding: 24px;
        flex-wrap: nowrap;
    }
`;

export const ImgContainer = styled.div`
    width: 100px; 
    height: 100px; 
    border: 3px solid #FBE9BA;
    border-radius: 50%;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    @media (min-width: 1280px) {
        width: 120px; 
        height: 120px; 
    }
`;

export const ProfilePhoto = styled.img`
    width: 100%; 
    height: 100%; 
    border-radius: 50%;
    object-fit: cover; 
`;

export const TopInfoContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    position: absolute;
    top: 18px;
    right: 18px;

    @media (min-width: 768px) {
        gap: 24px;
        top: 24px;
        right: 24px;
    }

    @media (min-width: 1280px) {
        gap: 64px;
        top: 24px;
        right: 24px;
    }
`;

export const LessonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 3px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 16px;
    }

    @media (min-width: 1280px) {
        gap: 16px;
        flex-direction: row;
    }
`;

export const LessonsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    padding-right: 7px;

    @media (min-width: 768px) {
        padding-right: 16px;
        &:not(:last-child) {
            border-right: 1px solid #8A8A89;
        }
    }

    @media (min-width: 1280px) {
        padding-right: 16px;
        &:not(:last-child) {
            border-right: 1px solid #8A8A89;
        }
    }
`;

export const Text = styled.p`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #121417;
`;

export const Accent = styled.span`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #38CD3E;
`;

export const MainInfoContainer = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
`;

export const TextWrapper = styled.div`
    display: flex;
    gap: 3px;
`;

export const NameContainer = styled.div`
    padding-bottom: 32px;
    padding-top: 12px;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    @media (min-width: 1280px) {
        padding: 0 0 32px 0;
        gap: 8px;
    }
`;

export const UnderlinedText = styled.p`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #121417;
    text-decoration: underline;
`;

export const GreyAccent = styled.p`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #8A8A89;
    white-space: nowrap;
`;

export const Name = styled.p`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 24px;
    line-height: 24px;
    color: #121417;
`;

export const ReadMoreBtn = styled.button`
    text-decoration: underline;
`;

export const LoadMore = styled.button`
    font-family: 'Roboto-Bold', sans-serif;
    font-size: 18px;
    line-height: 28px;
    color: #121417;
    border: 1px solid #F4C550;
    border-radius: 12px;
    padding: 16px 48px;
    background-color: #F4C550;
    cursor: pointer;
`;