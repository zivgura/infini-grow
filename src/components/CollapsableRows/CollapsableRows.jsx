import moment from 'moment/moment';
import PropTypes from 'prop-types';
import BudgetCollapsableRow from '../BudgetCollapsableRow/BudgetCollapsableRow';
import { FieldTypes } from '../Field/constants';

export default function CollapsableRows({rowsData, openRowId, setOpenRowId, deleteRow}) {
    return (
        rowsData?.map(({id, value, date}) => (
            <BudgetCollapsableRow
                id={id}
                openRowId={openRowId}
                setOpenRowId={setOpenRowId}
                rowData={value}
                deleteRow={deleteRow}
                yearOfCreation={moment(date).year()}
            />
        ))
    )
}

CollapsableRows.PropType = {
    openRowId: PropTypes.string.isRequired,
    setOpenRowId: PropTypes.func.isRequired,
    rowData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        baseline: PropTypes.shape({value: PropTypes.number, type: PropTypes.oneOf(FieldTypes)}).isRequired,
        budgetFrequency: PropTypes.shape({value: PropTypes.number, type: PropTypes.oneOf(FieldTypes)}).isRequired,
        budgetAllocation: PropTypes.shape({value: PropTypes.number, type: PropTypes.oneOf(FieldTypes)}).isRequired
    })).isRequired,
    deleteRow: PropTypes.func.isRequired
}
