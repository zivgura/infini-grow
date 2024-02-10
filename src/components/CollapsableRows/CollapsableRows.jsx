import moment from 'moment/moment';
import PropTypes from 'prop-types';
import { RowDataProps } from '../../Pages/Budget/constants';
import BudgetCollapsableRow from '../BudgetCollapsableRow/BudgetCollapsableRow';

export default function CollapsableRows({rowsData, setRowsData, openRowId, setOpenRowId, deleteRow}) {
    return (
        rowsData?.map(({id, value, date}, index) => (
            <BudgetCollapsableRow
                key={index}
                id={id}
                rowDataIndex={index}
                openRowId={openRowId}
                setOpenRowId={setOpenRowId}
                rowData={value}
                setRowsData={setRowsData}
                deleteRow={deleteRow}
                yearOfCreation={moment(date).year()}
            />
        ))
    )
}

CollapsableRows.propTypes = {
    openRowId: PropTypes.number,
    setOpenRowId: PropTypes.func,
    rowsData: PropTypes.arrayOf(RowDataProps.isRequired),
    setRowsData: PropTypes.func,
    deleteRow: PropTypes.func.isRequired
}
