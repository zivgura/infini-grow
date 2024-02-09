import styled from 'styled-components';

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: ${({width})=> width ? width : '226px'};
`;

export const FieldLabel = styled.div`
    display: flex;
`;

export const FieldValue = styled.div`
    display: flex;
    width: 100%;
    height: 40px;
`;