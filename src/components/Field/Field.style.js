import styled from 'styled-components';

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: ${({width}) => width ? width : '226px'};
`;

export const FieldLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const FieldValue = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
`;

export const PrefixContainer = styled.section`
    color: ${({theme}) => theme.colors.darkBlue};
    background: ${({theme}) => theme.gradients.main};
    padding-right: 8px;
    font-family: "Avenir Next", serif;
    font-weight: 500;
`;
