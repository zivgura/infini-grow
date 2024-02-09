import { ANNUAL, MONTHLY, QUARTERLY } from '../../components/BudgetRow/constants';
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

export function getMonthlyAmountByFrequency(frequency, budget){
    switch (frequency){
        case ANNUAL:
            return budget/12;
        case MONTHLY:
            return budget
        case QUARTERLY:
            return budget/4;
        default:
          return null;
    }
}

export function onBudgetFrequencyChange(e, formik){
    const frequency = e.target.value;
    const budget = formik.values[FieldsNames.baseline];
    const value = getMonthlyAmountByFrequency(frequency, budget)
    for(const fieldName in BreakdownFieldsNames){
        formik.setFieldValue(fieldName, value)
    }
}