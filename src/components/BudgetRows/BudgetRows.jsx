import { BudgetRow } from '../BudgetRow/BudgetRow';
import { CHANNEL } from '../BudgetRow/constants';
import { BudgetRowsContainer } from './BudgetRows.style';

export function BudgetRows({rowsData}) {
    return (
        <BudgetRowsContainer>
            <BudgetRow
                title={CHANNEL}
            />
            {rowsData.map((rowData) => (
                <BudgetRow
                    rowData={rowData}
                />
            ))}
        </BudgetRowsContainer>
    )
}