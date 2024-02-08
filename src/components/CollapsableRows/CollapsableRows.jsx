import PropTypes from 'prop-types';
import { useState } from 'react';
import { updateStorage } from '../../utils';
import CollapsableRow from '../CollapsableRow/CollapsableRow';
import { FieldTypes } from '../Field/constants';

export default function CollapsableRows({rowsData, setRowsData}) {
    const [openRowIndex, setOpenRowIndex] = useState(0)

    function setRowData(rowData, index) {
        rowsData[index] = rowData
        setRowsData(rowsData)
        updateStorage(rowsData)
    }

    return (
        rowsData?.map((rowData, index) => (
            <CollapsableRow
                index={index}
                openRowIndex={openRowIndex}
                setOpenRowIndex={setOpenRowIndex}
                rowData={rowData}
                setRowData={setRowData}
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
