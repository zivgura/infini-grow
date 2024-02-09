import { useFormik } from 'formik';
import { useState } from 'react';
import { FieldsNames as formFields, FieldsNames } from '../../Pages/Budget/constants';
import { getMonthlyAmountByFrequency, onBudgetFrequencyChange } from '../../Pages/Budget/utils';
import { edit } from '../../utils';
import BudgetBreakdown from '../BudgetBreakdown/BudgetBreakdown';
import CollapsableRow from '../CollapsableRow/CollapsableRow';
import { EDITABLE_LABEL_TYPE, NUMBER_TYPE, SELECT_TYPE, TOGGLE_TYPE } from '../Field/constants';
import Field from '../Field/Field';
import onNameFieldBlur from '../Field/utils';
import { getMenuOptions } from '../Menu/utils';
import {
    RowBodyFieldsContainer,
} from "./BudgetRow.style";
import { ReactComponent as BudgetIcon } from "../../assets/budget-icon.svg";
import {
    BUDGET_FREQUENCY,
    BUDGET_ALLOCATION,
    BudgetFrequencyOptions,
    BudgetAllocationOptions,
} from './constants';
import { getBaselineTitle } from './utils';

export default function BudgetRow({id, openRowId, setOpenRowId, rowData, deleteRow, yearOfCreation}) {
    const isRowOpen = openRowId === id;
    const {name, budgetFrequency, baseline, budgetAllocation} = rowData;
    const budgetBreakdownValue = getMonthlyAmountByFrequency(budgetFrequency, baseline)
    const [isInEditMode, setIsInEditMode] = useState(false);

    const initialValues = {
        [formFields.name]: name,
        [formFields.budgetFrequency]: budgetFrequency,
        [formFields.baseline]: baseline,
        [formFields.budgetAllocation]: budgetAllocation,
        [formFields.budgetBreakdown1]: budgetBreakdownValue,
        [formFields.budgetBreakdown2]: budgetBreakdownValue,
        [formFields.budgetBreakdown3]: budgetBreakdownValue,
        [formFields.budgetBreakdown4]: budgetBreakdownValue,
        [formFields.budgetBreakdown5]: budgetBreakdownValue,
        [formFields.budgetBreakdown6]: budgetBreakdownValue,
        [formFields.budgetBreakdown7]: budgetBreakdownValue,
        [formFields.budgetBreakdown8]: budgetBreakdownValue,
        [formFields.budgetBreakdown9]: budgetBreakdownValue,
        [formFields.budgetBreakdown10]: budgetBreakdownValue,
        [formFields.budgetBreakdown11]: budgetBreakdownValue,
        [formFields.budgetBreakdown12]: budgetBreakdownValue,
    }

    const formik = useFormik({
        initialValues,
        validate: (values) => {
            let errors = {};
            if (values[formFields.baseline] <= 0) {
                errors[formFields.baseline] = 'Baseline must be grater then 0';
            }
            return errors
        },
        onSubmit: () => {
            edit(formik.values, id)
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
                name={FieldsNames.name}
                label={formik.values[formFields.name]}
                value={formik.values[formFields.name]}
                type={EDITABLE_LABEL_TYPE}
                fieldProps={isInEditMode}
                onBlur={() => onNameFieldBlur(setIsInEditMode, onBlur)}
            />
        </>
    )

    const rowBody = (
        <>
            <RowBodyFieldsContainer>
                <Field
                    formik={formik}
                    name={FieldsNames.budgetFrequency}
                    label={BUDGET_FREQUENCY}
                    value={formik.values[formFields.budgetFrequency]}
                    type={SELECT_TYPE}
                    fieldProps={BudgetFrequencyOptions}
                    onBlur={onBlur}
                    onChange={(e) => onBudgetFrequencyChange(e, formik)}
                />
                <Field
                    formik={formik}
                    name={FieldsNames.baseline}
                    label={getBaselineTitle(formik.values[formFields.budgetFrequency])}
                    value={formik.values[formFields.baseline]}
                    type={NUMBER_TYPE}
                    onBlur={onBlur}
                />
                <Field
                    formik={formik}
                    name={FieldsNames.budgetAllocation}
                    label={BUDGET_ALLOCATION}
                    value={formik.values[formFields.budgetAllocation]}
                    type={TOGGLE_TYPE}
                    fieldProps={BudgetAllocationOptions}
                    onBlur={onBlur}
                />
            </RowBodyFieldsContainer>
            <BudgetBreakdown
                formik={formik}
                yearOfCreation={yearOfCreation}
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
