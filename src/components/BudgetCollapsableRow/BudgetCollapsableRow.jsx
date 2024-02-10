import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormFieldsNames, RowDataProps } from '../../Pages/Budget/constants';
import {
    editRowInUIAndStorage,
    onBudgetControllersChange
} from '../../Pages/Budget/utils';
import BudgetBreakdown from '../BudgetBreakdown/BudgetBreakdown';
import CollapsableRow from '../CollapsableRow/CollapsableRow';
import { EDITABLE_LABEL_TYPE, NUMBER_TYPE, SELECT_TYPE, TOGGLE_TYPE } from '../Field/constants';
import Field from '../Field/Field';
import { onNameFieldBlur } from '../Field/utils';
import { getMenuOptions } from '../Menu/utils';
import {
    RowBodyFieldsContainer,
} from "./BudgetCollapsableRow.style";
import { ReactComponent as BudgetIcon } from "../../assets/budget-icon.svg";
import {
    BUDGET_FREQUENCY,
    BUDGET_ALLOCATION,
    BudgetFrequencyOptions,
    BudgetAllocationOptions, EQUAL, BUDGET_BASELINE_TOOLTIP, BUDGET_FREQUENCY_TOOLTIP, BUDGET_ALLOCATION_TOOLTIP,
} from './constants';
import { getBaselineFontColor, getBaselineTitle, getBreakdownFieldFontColor } from './utils';
import { theme } from '../../theme';

export default function BudgetCollapsableRow({
    id,
    rowDataIndex,
    openRowId,
    setOpenRowId,
    rowData,
    deleteRow,
    yearOfCreation,
    setRowsData
}) {
    const isRowOpen = openRowId === id;
    const {
        name,
        budgetFrequency,
        baseline,
        budgetAllocation,
        budgetBreakdown1,
        budgetBreakdown2,
        budgetBreakdown3,
        budgetBreakdown4,
        budgetBreakdown5,
        budgetBreakdown6,
        budgetBreakdown7,
        budgetBreakdown8,
        budgetBreakdown9,
        budgetBreakdown10,
        budgetBreakdown11,
        budgetBreakdown12,
    } = rowData;
    const [isInEditMode, setIsInEditMode] = useState(false);

    const initialValues = {
        [FormFieldsNames.name]: name,
        [FormFieldsNames.budgetFrequency]: budgetFrequency,
        [FormFieldsNames.baseline]: baseline,
        [FormFieldsNames.budgetAllocation]: budgetAllocation,
        [FormFieldsNames.budgetBreakdown1]: budgetBreakdown1,
        [FormFieldsNames.budgetBreakdown2]: budgetBreakdown2,
        [FormFieldsNames.budgetBreakdown3]: budgetBreakdown3,
        [FormFieldsNames.budgetBreakdown4]: budgetBreakdown4,
        [FormFieldsNames.budgetBreakdown5]: budgetBreakdown5,
        [FormFieldsNames.budgetBreakdown6]: budgetBreakdown6,
        [FormFieldsNames.budgetBreakdown7]: budgetBreakdown7,
        [FormFieldsNames.budgetBreakdown8]: budgetBreakdown8,
        [FormFieldsNames.budgetBreakdown9]: budgetBreakdown9,
        [FormFieldsNames.budgetBreakdown10]: budgetBreakdown10,
        [FormFieldsNames.budgetBreakdown11]: budgetBreakdown11,
        [FormFieldsNames.budgetBreakdown12]: budgetBreakdown12,
    }

    const formik = useFormik({
        initialValues,
        validate: (values) => {
            let errors = {};
            if (values[FormFieldsNames.baseline] <= 0) {
                errors[FormFieldsNames.baseline] = 'Baseline must be grater then 0';
            }
            return errors
        },
        onSubmit: () => {
            editRowInUIAndStorage({rowDataIndex, setRowsData, id, object: formik.values})
        }
    })

    function onBlur() {
        formik.submitForm();
    }

    const rowHeader = (
        <>
            <BudgetIcon/>
            <Field
                formik={formik}
                name={FormFieldsNames.name}
                label={formik.values[FormFieldsNames.name]}
                value={formik.values[FormFieldsNames.name]}
                type={EDITABLE_LABEL_TYPE}
                fieldProps={isInEditMode}
                onBlur={() => onNameFieldBlur(setIsInEditMode, onBlur)}
                color={theme.colors.blue}
            />
        </>
    )

    const isEqual = formik.values[FormFieldsNames.budgetAllocation] === EQUAL;

    const rowBody = (
        <>
            <RowBodyFieldsContainer>
                <Field
                    formik={formik}
                    name={FormFieldsNames.budgetFrequency}
                    label={BUDGET_FREQUENCY}
                    value={formik.values[FormFieldsNames.budgetFrequency]}
                    type={SELECT_TYPE}
                    fieldProps={BudgetFrequencyOptions}
                    onBlur={onBlur}
                    onChange={(e) => onBudgetControllersChange(e, formik)}
                    color={theme.colors.darkBlue}
                    tooltip={BUDGET_FREQUENCY_TOOLTIP}
                />
                <Field
                    formik={formik}
                    name={FormFieldsNames.baseline}
                    label={getBaselineTitle(formik.values[FormFieldsNames.budgetFrequency])}
                    value={formik.values[FormFieldsNames.baseline]}
                    type={NUMBER_TYPE}
                    onBlur={onBlur}
                    color={getBaselineFontColor(isEqual)}
                    onChange={(e) => onBudgetControllersChange(e, formik)}
                    tooltip={BUDGET_BASELINE_TOOLTIP}
                />
                <Field
                    formik={formik}
                    name={FormFieldsNames.budgetAllocation}
                    label={BUDGET_ALLOCATION}
                    value={formik.values[FormFieldsNames.budgetAllocation]}
                    type={TOGGLE_TYPE}
                    fieldProps={BudgetAllocationOptions}
                    onBlur={onBlur}
                    onChange={(e) => onBudgetControllersChange(e, formik)}
                    color={theme.colors.darkBlue}
                    tooltip={BUDGET_ALLOCATION_TOOLTIP}
                />
            </RowBodyFieldsContainer>
            <BudgetBreakdown
                formik={formik}
                onBlur={onBlur}
                yearOfCreation={yearOfCreation}
                fieldsFontColor={getBreakdownFieldFontColor(isEqual)}
                disabled={isEqual}
            />
        </>
    )

    return (
        <CollapsableRow
            id={id}
            formik={formik}
            isRowOpen={isRowOpen}
            rowHeader={rowHeader}
            rowBody={rowBody}
            menuOptions={getMenuOptions({id, setIsInEditMode, deleteRow})}
            setOpenRowId={setOpenRowId}
        />
    )
}
BudgetCollapsableRow.propTypes = {
    id: PropTypes.number.isRequired,
    rowDataIndex: PropTypes.number,
    openRowId: PropTypes.number,
    setOpenRowId: PropTypes.func,
    rowData: RowDataProps,
    deleteRow: PropTypes.func,
    yearOfCreation: PropTypes.number,
    setRowsData: PropTypes.func
}
