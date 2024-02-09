import styled from 'styled-components';

export const BudgetViewContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const HeaderContainer = styled.section`
    display: flex;
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: ${({theme})=> theme.colors.deepBlue};
`;

export const SubHeaderContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const TitleContainer = styled.section`
    display: flex;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
`;

export const SubTitleContainer = styled.section`
    display: flex;
    justify-content: space-between;
    color: ${({theme})=> theme.colors.lightGray};
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
`;
