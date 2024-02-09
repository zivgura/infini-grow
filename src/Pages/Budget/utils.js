import { ANNUAL, EQUAL, MONTHLY, QUARTERLY } from '../../components/BudgetRow/constants';
import { buildObjectToStorage, getBudgetsFromStorage, remove, save, updateUI } from '../../utils';
import { BreakdownFieldsNames, DefaultBudgetValue, FieldsNames } from './constants';

export function addRowToUIAndStorage({rowsData, setRowsData, setOpenRowId}) {
    const nextId = rowsData.length;
    const objectToStorage = buildObjectToStorage(DefaultBudgetValue, nextId);
    setRowsData([...rowsData, objectToStorage])
    save(DefaultBudgetValue, nextId)
    setOpenRowId(nextId)
}

export function deleteRowFromUiAndStorage({id, rowsData, setRowsData}) {
    const filteredRowsData = rowsData.filter((budget) => budget.id !== id)
    setRowsData(filteredRowsData);
    remove(id);
}

export function initStorage(setRowsData) {
    const rowsDataFromStorage = getBudgetsFromStorage();
    if (rowsDataFromStorage)
        updateUI(setRowsData);
}

export function getMonthlyAmountByFrequency(frequency, budget, budgetAllocation, fieldCurrentValue){
    const isEqual = budgetAllocation === EQUAL;
    let value = 0;
    switch (frequency){
        case ANNUAL:
            value= budget/12;
            break;
        case MONTHLY:
            value= budget
            break;
        case QUARTERLY:
            value = budget/4;
            break;
        default:
          return null;
    }
    return isEqual ? value : fieldCurrentValue;
}

export function onBudgetControllersChange(e, formik){
    const frequency = e.target.name === FieldsNames.budgetFrequency ? e.target.value : formik.values[FieldsNames.budgetFrequency];
    const baseline = e.target.name === FieldsNames.baseline ? e.target.value : formik.values[FieldsNames.baseline];
    const budgetAllocation = e.target.name === FieldsNames.budgetAllocation ? e.target.value : formik.values[FieldsNames.budgetAllocation];
    for(const fieldName in BreakdownFieldsNames){
        const fieldCurrentValue = formik.values[fieldName];
        const value = getMonthlyAmountByFrequency(frequency, baseline, budgetAllocation, fieldCurrentValue);
        formik.setFieldValue(fieldName, value)
    }
}