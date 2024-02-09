import { Row } from '../Row/Row';

export function BudgetRow({rowData, title, height}){
    return(
        <Row
            rowData={rowData}
            height={height}
            title={title}
        />
    )
}