import styled from 'styled-components';

export const CollapsableRowContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    border: ${({theme})=> `1px solid ${theme.borders.main}`};
`;

export const RowHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 14px;
    background-color: ${({theme})=> theme.backgrounds.main};
    border-radius: ${({ open }) => open ? '3px 0': '3px'};
    height: 52px;
    cursor: pointer;
    border-bottom: ${({ open, theme }) => open ? `1px solid ${theme.borders.main}`: 'none'};
`;

export const LeftSectionContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 14px;
`;
export const RightSectionContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 0;
`;
export const RowBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
`;
export const RowBodyFieldsContainer = styled.div`
    display: flex;
    gap: 56px;
    padding: 32px;
`;

export const ArrowDownIconContainer = styled.section`
    display: flex;
    svg {
        transform: ${({ open }) => !open && "rotate(-90deg)"};
    }
`;

export const RowTitleContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 12px;
    line-height: 21px;
    font-weight: 500;
    font-size: 14px;
`;