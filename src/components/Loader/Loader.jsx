import { LoaderContainer, Loading, LoadingText } from './Loader.styled';

export const Loader = () => {
    return (
        <LoaderContainer>
            <Loading />
            <LoadingText>Loading...</LoadingText>
        </LoaderContainer>
    );
};