import { Form, FormikProvider, useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { FieldsNames as formFields, FieldsNames } from '../../Pages/Budget/constants';
import { edit } from '../../utils';
import { EDITABLE_LABEL_TYPE, NUMBER_TYPE, SELECT_TYPE, TOGGLE_TYPE } from '../Field/constants';
import Field from '../Field/Field';
import onNameFieldBlur from '../Field/utils';
import Menu from '../Menu/Menu';
import { getMenuOptions } from '../Menu/utils';
import {
    ArrowDownIconContainer,
    CollapsableRowContainer,
    LeftSectionContainer, RightSectionContainer,
    RowBodyContainer,
    RowHeaderContainer,
    RowTitleContainer
} from "./CollapsableRow.style";
import Collapse from "@mui/material/Collapse";
import { ReactComponent as BudgetIcon } from "../../assets/budget-icon.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/arrow-down-icon.svg";
import { ReactComponent as KebabMenuIcon } from "../../assets/kebab-icon.svg";
import {
    BUDGET_FREQUENCY, BUDGET_ALLOCATION, BudgetFrequencyOptions, BudgetAllocationOptions, MenuPositioningObject
} from './constants';
import { getBaselineTitle } from './utils';

export default function CollapsableRow({id, openRowId, setOpenRowId, rowData, deleteRow}) {
    const isRowOpen = openRowId === id;
    const {name, budgetFrequency, baseline, budgetAllocation} = rowData;
    const menuRef = useRef(null)
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [isInEditMode, setIsInEditMode] = useState(false);

    useEffect(() => {
        if (menuRef) {
            setAnchorEl(menuRef.current)
        }
    }, [menuRef]);

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
            edit(formik.values, id)
        }
    })

    function onBlur() {
        formik.submitForm();
    }

    function onMenuClick(e) {
        e.stopPropagation()
        setOpenMenu(!openMenu)
    }

    return (
        <CollapsableRowContainer
            id={id}
            isRowOpen={isRowOpen}
        >
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <RowHeaderContainer
                        open={isRowOpen}
                        onClick={() => setOpenRowId(isRowOpen ? null : id)}
                    >
                        <LeftSectionContainer>
                            <ArrowDownIconContainer open={isRowOpen}>
                                <ArrowDownIcon/>
                            </ArrowDownIconContainer>
                            <RowTitleContainer>
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
                            </RowTitleContainer>
                        </LeftSectionContainer>
                        <RightSectionContainer onClick={onMenuClick} ref={menuRef}>
                            <KebabMenuIcon/>
                            <Menu
                                menuOptions={getMenuOptions({id, setIsInEditMode, deleteRow})}
                                anchorEl={anchorEl}
                                open={openMenu}
                                setOpen={setOpenMenu}
                                positionObject={MenuPositioningObject}
                            />
                        </RightSectionContainer>
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
                            />
                            <Field
                                formik={formik}
                                name={FieldsNames.baseline}
                                label={getBaselineTitle(budgetFrequency)}
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
                        </RowBodyContainer>
                    </Collapse>
                </Form>
            </FormikProvider>
        </CollapsableRowContainer>
    )
}
