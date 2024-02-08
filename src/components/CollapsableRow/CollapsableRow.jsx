import { Form, FormikProvider, useFormik } from 'formik';
import { FieldsNames as formFields, FieldsNames } from '../../Pages/Budget/constants';
import { edit } from '../../utils';
import { NUMBER_TYPE, SELECT_TYPE, TOGGLE_TYPE } from '../Field/constants';
import Field from '../Field/Field';
import {
    ArrowDownIconContainer, CollapsableRowContainer, RowBodyContainer, RowHeaderContainer, RowTitleContainer
} from "./CollapsableRow.style";
import Collapse from "@mui/material/Collapse";
import { ReactComponent as BudgetIcon } from "../../assets/budget-icon.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/arrow-down-icon.svg";
import {
    BUDGET_FREQUENCY, BUDGET_ALLOCATION, BudgetFrequencyOptions, BudgetAllocationOptions
} from './constants';
import { getBaselineTitle } from './utils';

export default function CollapsableRow({index, openRowIndex, setOpenRowIndex, rowData, setRowData}) {
    const isRowOpen = openRowIndex === index;
    const {name, budgetFrequency, baseline, budgetAllocation} = rowData;

    const initialValues = {
        [formFields.name]: name,
        [formFields.budgetFrequency]: budgetFrequency,
        [formFields.baseline]: baseline,
        [formFields.budgetAllocation]: budgetAllocation,
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
            edit(formik.values, index)
        }
    })

    function onBlur() {
        // setRowData(rowData, index)
        formik.submitForm();
    }

    // function onChange(object) {
    //     //todo: get index and get value by index
    //     const key = Object.keys(object)[0];
    //     rowData[`${key}`] = Object.values(object)[0];
    //     setRowData(rowData, index)
    // }

    return (
        <CollapsableRowContainer
            id={index}
            isRowOpen={isRowOpen}
        >
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <RowHeaderContainer
                        open={isRowOpen}
                        onClick={() => setOpenRowIndex(isRowOpen ? null : index)}
                    >
                        <ArrowDownIconContainer open={isRowOpen}>
                            <ArrowDownIcon/>
                        </ArrowDownIconContainer>
                        <RowTitleContainer>
                            <BudgetIcon/>
                            <Field
                                formik={formik}
                                name={FieldsNames.name}
                                label={name}
                                onBlur={onBlur}
                                onChange={formik.handleChange}
                            />
                        </RowTitleContainer>
                    </RowHeaderContainer>
                    <Collapse in={isRowOpen} timeout="auto">
                        <RowBodyContainer>
                            <Field
                                formik={formik}
                                name={FieldsNames.budgetFrequency}
                                label={BUDGET_FREQUENCY}
                                value={formik.values[formFields.budgetFrequency]}
                                type={SELECT_TYPE}
                                fieldProps={BudgetFrequencyOptions}
                                onBlur={onBlur}
                                onChange={formik.handleChange}
                            />
                            <Field
                                formik={formik}
                                name={FieldsNames.baseline}
                                label={getBaselineTitle(budgetFrequency)}
                                value={formik.values[formFields.baseline]}
                                type={NUMBER_TYPE}
                                onBlur={onBlur}
                                onChange={formik.handleChange}
                            />
                            <Field
                                formik={formik}
                                name={FieldsNames.budgetAllocation}
                                label={BUDGET_ALLOCATION}
                                value={formik.values[formFields.budgetAllocation]}
                                type={TOGGLE_TYPE}
                                fieldProps={BudgetAllocationOptions}
                                onBlur={onBlur}
                                onChange={formik.handleChange}
                            />
                        </RowBodyContainer>
                    </Collapse>
                </Form>
            </FormikProvider>
        </CollapsableRowContainer>
    )
}
