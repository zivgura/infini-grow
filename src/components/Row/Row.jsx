import { RowBodyContainer, RowContainer, RowHeaderContainer } from './Row.style';

export function Row({rowData, title, height}){
    return(
        <RowContainer>
            <RowHeaderContainer height={height}>
                {title}
            </RowHeaderContainer>
            <RowBodyContainer>

            </RowBodyContainer>
        </RowContainer>
    )
}