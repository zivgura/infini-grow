import moment from 'moment';
import PropTypes from 'prop-types';
import { RowDataProps } from '../../Pages/Budget/constants';
import { BudgetRows } from '../BudgetRows/BudgetRows';

export function BudgetRowsPerYear({rowsData}) {
    const uniqueYears = [...new Set(rowsData?.map(({date}) => moment(date)?.year()))]
    return (
        uniqueYears?.map((year, index) => (
            <BudgetRows
                key={index}
                rowsData={rowsData}
                yearOfCreation={year}
            />
        ))
    )
}
BudgetRowsPerYear.propTypes = {
    rowsData: PropTypes.arrayOf(RowDataProps).isRequired
}
