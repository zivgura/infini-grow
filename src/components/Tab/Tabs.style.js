import styled from 'styled-components';

export const TabContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LabelContainer = styled.div`
    display: flex;
    font-family: "Avenir Next",serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 16px;
    
    color: ${({ activeTab }) => (activeTab ? '#000000' : '#7E7E7E')};
`;
export const UnderlineHighlightContainer = styled.div`
    width: 100%;
    height: 3px;
    color: #000000;
`;
