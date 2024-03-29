import PropTypes from 'prop-types';
import { BreakdownFieldsNames, RowDataProps } from '../../Pages/Budget/constants';
import { Row } from '../Row/Row';
import { ReactComponent as BudgetIcon } from "../../assets/budget-icon.svg";
import { RowTitleContainer } from './BudgetRow.style';


export function BudgetRow({rowData, startAdornment}) {
    const {value} = rowData;

    function getValues(rowDataValue) {
        let values = []
        for (const fieldName in BreakdownFieldsNames) {
            values.push(rowDataValue[fieldName].toLocaleString());
        }
        return values
    }

    return (
        <Row
            type={'data'}
            values={getValues(value)}
            title={
                <RowTitleContainer>
                    <BudgetIcon/>
                    {value?.name}
                </RowTitleContainer>
            }
            startAdornment={startAdornment}
        />
    )
}

BudgetRow.propTypes = {
    rowData: RowDataProps,
    startAdornment: PropTypes.string
}