import styled from 'styled-components';

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const RowHeaderContainer = styled.section`
    display: flex;
    align-items: center;
    width: 300px;
    height: ${({height}) => height ? height : '48px'};
    background: ${({theme}) => theme.gradients.secondary};
    border-right: ${({theme}) => `1px solid ${theme.borders.main}`};
    font-size: 11px;
    font-weight: 700;
    line-height: 16px;
    color:${({theme})=>theme.colors.lightGray};
    padding-left: 28px;
`;

export const RowBodyContainer = styled.section`
    
`;