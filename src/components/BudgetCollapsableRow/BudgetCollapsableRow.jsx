import { useFormik } from 'formik';
import { useState } from 'react';
import { FieldsNames as formFields, FieldsNames } from '../../Pages/Budget/constants';
import { getMonthlyAmountByFrequency, onBudgetControllersChange } from '../../Pages/Budget/utils';
import { edit } from '../../utils';
import BudgetBreakdown from '../BudgetBreakdown/BudgetBreakdown';
import CollapsableRow from '../CollapsableRow/CollapsableRow';
import { EDITABLE_LABEL_TYPE, NUMBER_TYPE, SELECT_TYPE, TOGGLE_TYPE } from '../Field/constants';
import Field from '../Field/Field';
import onNameFieldBlur from '../Field/utils';
import { getMenuOptions } from '../Menu/utils';
import {
    RowBodyFieldsContainer,
} from "./BudgetCollapsableRow.style";
import { ReactComponent as BudgetIcon } from "../../assets/budget-icon.svg";
import {
    BUDGET_FREQUENCY,
    BUDGET_ALLOCATION,
    BudgetFrequencyOptions,
    BudgetAllocationOptions, EQUAL,
} from './constants';
import { getBaselineFontColor, getBaselineTitle, getBreakdownFieldFontColor } from './utils';
import { theme } from '../../theme';

export default function BudgetCollapsableRow({id, openRowId, setOpenRowId, rowData, deleteRow, yearOfCreation}) {
    const isRowOpen = openRowId === id;
    const {
        name,
        budgetFrequency,
        baseline,
        budgetAllocation
    } = rowData;
    const [isInEditMode, setIsInEditMode] = useState(false);

    const initialValues = {
        [formFields.name]: name,
        [formFields.budgetFrequency]: budgetFrequency,
        [formFields.baseline]: baseline,
        [formFields.budgetAllocation]: budgetAllocation,
        [formFields.budgetBreakdown1]: getMonthlyAmountByFrequency(budgetFrequency, baseline, budgetAllocation, 0),
        [formFields.budgetBreakdown2]: getMonthlyAmountByFrequency(budgetFrequency, baseline, budgetAllocation, 0),
        [formFields.budgetBreakdown3]: getMonthlyAmountByFrequency(budgetFrequency, baseline, budgetAllocation, 0),
        [formFields.budgetBreakdown4]: getMonthlyAmountByFrequency(budgetFrequency, baseline, budgetAllocation, 0),
        [formFields.budgetBreakdown5]: getMonthlyAmountByFrequency(budgetFrequency, baseline, budgetAllocation, 0),
        [formFields.budgetBreakdown6]: getMonthlyAmountByFrequency(budgetFrequency, baseline, budgetAllocation, 0),
        [formFields.budgetBreakdown7]: getMonthlyAmountByFrequency(budgetFrequency, baseline, budgetAllocation, 0),
        [formFields.budgetBreakdown8]: getMonthlyAmountByFrequency(budgetFrequency, baseline, budgetAllocation, 0),
        [formFields.budgetBreakdown9]: getMonthlyAmountByFrequency(budgetFrequency, baseline, budgetAllocation, 0),
        [formFields.budgetBreakdown10]: getMonthlyAmountByFrequency(budgetFrequency, baseline, budgetAllocation, 0),
        [formFields.budgetBreakdown11]: getMonthlyAmountByFrequency(budgetFrequency, baseline, budgetAllocation, 0),
        [formFields.budgetBreakdown12]: getMonthlyAmountByFrequency(budgetFrequency, baseline, budgetAllocation, 0),
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
                color={theme.colors.blue}
            />
        </>
    )

    const isEqual = formik.values[formFields.budgetAllocation] === EQUAL;

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
                    onChange={(e) => onBudgetControllersChange(e, formik)}
                    color={theme.colors.darkBlue}
                />
                <Field
                    formik={formik}
                    name={FieldsNames.baseline}
                    label={getBaselineTitle(formik.values[formFields.budgetFrequency])}
                    value={formik.values[formFields.baseline]}
                    type={NUMBER_TYPE}
                    onBlur={onBlur}
                    color={getBaselineFontColor(isEqual)}
                    onChange={(e) => onBudgetControllersChange(e, formik)}
                />
                <Field
                    formik={formik}
                    name={FieldsNames.budgetAllocation}
                    label={BUDGET_ALLOCATION}
                    value={formik.values[formFields.budgetAllocation]}
                    type={TOGGLE_TYPE}
                    fieldProps={BudgetAllocationOptions}
                    onBlur={onBlur}
                    onChange={(e) => onBudgetControllersChange(e, formik)}
                    color={theme.colors.darkBlue}
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
