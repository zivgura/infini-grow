import moment from 'moment';
import { BudgetRows } from '../BudgetRows/BudgetRows';

export function BudgetRowsPerYear({rowsData}) {
    const uniqueYears = [...new Set(rowsData.map(({date}) => moment(date).year()))]
    return (
        uniqueYears?.map((year) => (
            <BudgetRows
                rowsData={rowsData}
                yearOfCreation={year}
            />
        ))
    )
}