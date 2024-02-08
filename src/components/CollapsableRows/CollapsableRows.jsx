import PropTypes from 'prop-types';
import CollapsableRow from '../CollapsableRow/CollapsableRow';
import { FieldTypes } from '../Field/constants';

export default function CollapsableRows({rowsData, openRowId, setOpenRowId, deleteRow}) {
    return (
        rowsData?.map(({id, value}) => (
            <CollapsableRow
                id={id}
                openRowId={openRowId}
                setOpenRowId={setOpenRowId}
                rowData={value}
                deleteRow={deleteRow}
            />
        ))
    )
}

CollapsableRows.PropType = {
    rowData: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        baseline: PropTypes.shape({value: PropTypes.number, type: PropTypes.oneOf(FieldTypes)}).isRequired,
        budgetFrequency: PropTypes.shape({value: PropTypes.number, type: PropTypes.oneOf(FieldTypes)}).isRequired,
        budgetAllocation: PropTypes.shape({value: PropTypes.number, type: PropTypes.oneOf(FieldTypes)}).isRequired
    }))
}
