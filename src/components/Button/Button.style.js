import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    padding: 12px;
    border: ${({theme})=> `1px solid ${theme.borders.main}`};
    border-radius: 4px;
    color: ${({theme})=> theme.colors.grayBlue};
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
`;