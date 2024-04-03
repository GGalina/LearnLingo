import styled from 'styled-components';

export const TextDescr = styled.p`
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #121417;
`;

export const Text = styled.p`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #121417;
`;

export const TextWrapper = styled.div`
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    gap: 3px;
    margin-bottom: 32px;
`;

export const ReviewWrapper = styled.div`
    margin-bottom: 32px;
`;

export const ProfileWrapper = styled.div`
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
`;

export const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ProfilePhotoWrapper = styled.div`
    width: 44px; 
    height: 44px; 
    border: 3px solid ${({ $selcolor }) => $selcolor || '#F4C550'};
    border-radius: 50%;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: ${({ $selcolor }) => $selcolor || '#F4C550'};
`;

export const ProfilePhoto = styled.img`
    width: 35px;
    height: 35px;
`;

export const ProfileInfo = styled.div``;

export const GreyAccent = styled.p`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    color: #8A8A89;
    white-space: nowrap;
`;

export const BookTrial = styled.button`
    font-family: 'Roboto-Bold', sans-serif;
    font-size: 16px;
    line-height: 28px;
    color: #121417;
    padding: 16px 48px;
    border: 1px solid ${({ $selcolor }) => $selcolor || '#F4C550'};
    background-color: ${({ $selcolor }) => $selcolor || '#F4C550'};
    border-radius: 12px;
    margin-top: 32px;
    cursor: pointer;

    @media (min-width: 480px) {
        font-size: 16px;
        padding: 16px 48px;
    }
 
    @media (min-width: 768px) {
        font-size: 18px;
        padding: 16px 48px;
    }

    @media (min-width: 1280px) {
        font-size: 18px;
        padding: 16px 48px;
    }

    &:hover {
        transform: scale(1.1);
    }
`;