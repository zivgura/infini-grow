import moment from 'moment';
import { ANNUAL, EQUAL, MONTHLY, QUARTERLY } from '../../components/BudgetCollapsableRow/constants';
import { buildObjectToStorage, edit, getBudgetsFromStorage, remove, save, updateUI } from '../../utils';
import { BreakdownFieldsNames, DefaultBudgetValue, FormFieldsNames } from './constants';

export function addRowToUIAndStorage({rowsData, setRowsData, setOpenRowId}) {
    const nextId = rowsData.length;
    const breakdownObject = getDefaultBudgetBreakdown();
    const object = {...DefaultBudgetValue, ...breakdownObject}
    const objectToStorage = buildObjectToStorage(object, nextId);
    setRowsData([...rowsData, objectToStorage])
    save(object, nextId)
    setOpenRowId(nextId)
}

export function editRowInUIAndStorage({rowDataIndex, setRowsData, id, object}) {
    setRowsData((prevRowsData) => {
        prevRowsData[rowDataIndex] = buildObjectToStorage(object, id)
        return prevRowsData
    })
    edit(object, id)
}

export function deleteRowFromUiAndStorage({id, setRowsData}) {
    setRowsData((prevRowsData)=>
        prevRowsData.filter((budget) => budget.id !== id)
    );
    remove(id);
}

export function initStorage(setRowsData) {
    const rowsDataFromStorage = getBudgetsFromStorage();
    if (rowsDataFromStorage)
        updateUI(setRowsData);
}

export function getMonthlyAmountByFrequency(frequency, budget, budgetAllocation, fieldCurrentValue) {
    const isEqual = budgetAllocation === EQUAL;
    let value = 0;
    switch (frequency) {
        case ANNUAL:
            value = budget / 12;
            break;
        case MONTHLY:
            value = budget
            break;
        case QUARTERLY:
            value = budget / 4;
            break;
        default:
            return null;
    }
    return isEqual ? value : fieldCurrentValue;
}

export function onBudgetControllersChange(e, formik) {
    const frequency = e.target.name === FormFieldsNames.budgetFrequency ? e.target.value : formik.values[FormFieldsNames.budgetFrequency];
    const baseline = e.target.name === FormFieldsNames.baseline ? e.target.value : formik.values[FormFieldsNames.baseline];
    const budgetAllocation = e.target.name === FormFieldsNames.budgetAllocation ? e.target.value : formik.values[FormFieldsNames.budgetAllocation];
    for (const fieldName in BreakdownFieldsNames) {
        const fieldCurrentValue = formik.values[fieldName];
        const value = getMonthlyAmountByFrequency(frequency, baseline, budgetAllocation, fieldCurrentValue);
        formik.setFieldValue(fieldName, value)
    }
}

export function getShortMonthsWithShortYear(year) {
    const shortYear = year?.toString()?.substring(2, 4);
    return moment.monthsShort()?.map((month, index) => (
        `${month} ${shortYear}`
    ))
}

export function getDefaultBudgetBreakdown() {
    let defaultBudgetBreakdown = {}
    for (const fieldName in BreakdownFieldsNames) {
        defaultBudgetBreakdown[fieldName] = 0;
    }
    return defaultBudgetBreakdown;
}