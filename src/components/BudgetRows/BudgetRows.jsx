import PropTypes from 'prop-types';
import { RowDataProps } from '../../Pages/Budget/constants';
import { getShortMonthsWithShortYear } from '../../Pages/Budget/utils';
import { BudgetRow } from '../BudgetRow/BudgetRow';
import { CHANNEL } from '../BudgetRow/constants';
import { Row } from '../Row/Row';
import { BudgetRowsContainer } from './BudgetRows.style';

export function BudgetRows({rowsData, yearOfCreation}) {
    const months = getShortMonthsWithShortYear(yearOfCreation);
    return (
        <BudgetRowsContainer>
            <Row
                type={'header'}
                title={CHANNEL}
                values={months}
            />
            {rowsData?.map((rowData, index) => (
                <BudgetRow
                    key={index}
                    rowData={rowData}
                    startAdornment={'$'}
                />
            ))}
        </BudgetRowsContainer>
    )
}
BudgetRows.propTypes = {
    rowsData: PropTypes.arrayOf(RowDataProps.isRequired),
    yearOfCreation: PropTypes.number
}
