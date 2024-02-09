import styled from 'styled-components';

export const RowBudgetBreakdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 1128px;
    margin: 24px 32px 32px 32px;
    border-radius: 4px;
    border: ${({theme})=> `1px solid ${theme.borders.main}`};
    background-color: ${({theme}) => theme.backgrounds.main};
`;

export const BudgetBreakdownHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 8px
`;
export const BudgetBreakdownTitleContainer = styled.section`
    display: flex;
    color: ${({theme})=> theme.colors.deepBlue};
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
`;
export const BudgetBreakdownSubTitleContainer = styled.section`
    display: flex;
    color: ${({theme})=> theme.colors.lightGray};
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
`;

export const BudgetBreakdownSectionContainer = styled.section`
    gap: 24px;
    display: grid;
    grid-template-columns: 160px 160px 160px 160px 160px 160px;
    padding: 0 24px 32px 24px;
`;
