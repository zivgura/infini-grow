import styled from 'styled-components';

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const RowTitleContainer = styled.section`
    display: flex;
    align-items: center;
    width: 300px;
    padding-left: 28px;
    height: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: ${({theme}) => theme.gradients.secondary};
    border-right: ${({theme}) => `1px solid ${theme.borders.main}`};
`;

export const RowBodyContainer = styled.section`
    display: grid;
    grid-template-columns: 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px 80px;
    padding: 0 24px;
    gap: 0 12px;
`;

export const RowDataValueContainer = styled.section`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;