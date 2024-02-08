import styled from 'styled-components';

export const TabContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    cursor: pointer;
`;

export const LabelContainer = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 600;
    line-height: 16px;
    
    color: ${({ isActiveTab }) => (isActiveTab ? '#000000' : '#7E7E7E')};
`;
export const UnderlineHighlightContainer = styled.div`
    width: 100%;
    height: 3px;
    background-color: #000000;
`;
