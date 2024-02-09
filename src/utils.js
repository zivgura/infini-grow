import { now } from 'moment';

const BUDGETS = 'budgets'

export function initStorage(object) {
    window.localStorage.setItem(BUDGETS, JSON.stringify({'0': object}));
}

export function buildObjectToStorage(object, index){
    return {
        id: index,
        value: object,
        date: new Date(now())
    }
}

export function save(object, index) {
    const rowsDataFromStorage = JSON.parse(localStorage?.getItem('budgets'));
    let objectToStorage = buildObjectToStorage(object, index);
    if (index === 0 && !rowsDataFromStorage)
        initStorage(objectToStorage);
    else {
        let budgets = getBudgets();
        budgets = [objectToStorage, ...budgets];
        window.localStorage.setItem(BUDGETS, JSON.stringify(budgets));
    }
}

export function getBudgetIndexById(id){
    const budgets = getBudgets();
    return budgets.findIndex((budget)=> budget.id === id);
}
export function edit(object, id) {
    let budgets = getBudgetsFromStorage();
    const budgetIndex = getBudgetIndexById(id);
    if (budgetIndex >= 0) {
        budgets[budgetIndex] = buildObjectToStorage(object, id);
        updateStorage(budgets);
    }
}

export function updateUI(setState) {
    setState(getBudgets());
}

export function updateStorage(state) {
    window.localStorage.setItem(BUDGETS, JSON.stringify(state));
}

export function getBudgets() {
    const budgetsObject = getBudgetsFromStorage();
    return Object.values(budgetsObject);
}

export function getBudgetsFromStorage(){
    return JSON.parse(window.localStorage?.getItem('budgets'));
}

export function remove(id){
    let budgets = getBudgets();
    budgets = budgets.filter((budget) => budget.id !== id)
    updateStorage(budgets);
}

export function clear(){
    window.localStorage.clear();
}