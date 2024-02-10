import styled from 'styled-components';

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const RowHeaderContainer = styled.section`
    display: flex;
    align-items: center;
    width: 300px;
    padding-left: 28px;
    height: 64px;
    background: ${({theme}) => theme.gradients.secondary};
    border-right: ${({theme}) => `1px solid ${theme.borders.main}`};
    font-size: ${({style}) => style.fontSize};
    font-weight: ${({style}) => style.fontWeight};
    line-height: ${({style}) => style.lineHeight};
    color: ${({style}) => style.color};
`;

export const RowBodyContainer = styled.section`
    display: grid;
    grid-template-columns: 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px;
    padding: 0 24px;
`;

export const RowDataValueContainer = styled.section`
    display: flex;
    align-items: center;
    font-size: ${({style}) => style.fontSize};
    font-weight: ${({style}) => style.fontWeight};
    line-height: ${({style}) => style.lineHeight};
    color: ${({style}) => style.color};
`;