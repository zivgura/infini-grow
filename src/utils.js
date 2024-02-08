const BUDGETS = 'budgets'

export function initStorage(object) {
    window.localStorage.setItem(BUDGETS, JSON.stringify({'0': object}));
}

export function save(object, index) {
    const rowsDataFromStorage = JSON.parse(localStorage?.getItem('budgets'));
    if (index === 0 && !rowsDataFromStorage)
        initStorage(object);
    else {
        let budgets = getBudgets();
        budgets = [object, ...budgets];
        window.localStorage.setItem(BUDGETS, JSON.stringify(budgets));
    }
}

export function edit(object, index) {
    let budgets = getBudgets();
    budgets[index] = object;
    window.localStorage.setItem(BUDGETS, JSON.stringify(budgets));
}

export function updateUI(setState) {
    setState(getBudgets());
}

export function updateStorage(state) {
    window.localStorage.setItem(BUDGETS, JSON.stringify(state));
}

export function getBudgets() {
    const budgetsObject = JSON.parse(window.localStorage.getItem(BUDGETS));
    return Object.values(budgetsObject);
}

export function clear(){
    window.localStorage.clear();
}