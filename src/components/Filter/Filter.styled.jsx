import styled from 'styled-components';
import Select from 'react-select';

export const FilterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 32px;

    @media (min-width: 480px) {
        width: 400px;
    }

    @media (min-width: 768px) {
        width: 768px;
        flex-direction: row;
    }

    @media (min-width: 1280px) {
        width: 1280px;
    }
`;

export const FilterItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Label = styled.label`
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 14px;
    line-height: 18px;
    color: #8A8A89;
`;

export const CustomSelect = styled(Select)`
    .react-select__control {
        width: 100%;
        background-color: #FFFFFF; 
        border: 1px solid #FFFFFF;
        border-radius: 14px;
        transition: border-color 0.3s;
        font-family: 'Roboto-Medium', sans-serif;
        font-size: 18px;
        line-height: 20px;
        min-width: 120px;
        cursor: pointer;

        &:focus,
        &:hover,
        &:focus:not(:hover),
        &--is-focused {
            border-color: ${({ $selcolor }) => $selcolor || '#F4C550'};
            box-shadow: 0 0 0 1px ${({ $selcolor }) => $selcolor || '#F4C550'};
            outline: none;
        }
    }

    .react-select__option {
        background-color: #FFFFFF;
        color: rgba(18, 20, 23, 0.2);
        padding: 8px;
        border-radius: 4px;
        font-family: 'Roboto-Medium', sans-serif;
        font-size: 18px;
        line-height: 20px;
        cursor: pointer;

        &:hover,
        &:focus {
            color: #121417;
        }

        &:active,
        &--is-selected {
            color: #121417;
            background-color: #FFFFFF;
        }
    }

    .react-select__indicator {
        color: #121417;
    }

    .react-select__menu {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
    }
`;
