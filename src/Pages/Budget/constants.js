import { ANNUAL, EQUAL } from '../../components/BudgetRow/constants';
export const BUDGET_HEADER = 'Build your budget plan';
export const BUDGET_TITLE = 'Setup channels';
export const BUDGET_SUB_TITLE = 'Setup your added channels by adding baseline budgets out of your total budget. See the forecast impact with the help of tips and insights.';
export const TabsLabels = [
    'Tab1',
    'Tab2'
];

export const BUTTON_TEXT = 'Add Channel';

export const BreakdownFieldsNames = {
    budgetBreakdown1: 'budgetBreakdown1',
    budgetBreakdown2: 'budgetBreakdown2',
    budgetBreakdown3: 'budgetBreakdown3',
    budgetBreakdown4: 'budgetBreakdown4',
    budgetBreakdown5: 'budgetBreakdown5',
    budgetBreakdown6: 'budgetBreakdown6',
    budgetBreakdown7: 'budgetBreakdown7',
    budgetBreakdown8: 'budgetBreakdown8',
    budgetBreakdown9: 'budgetBreakdown9',
    budgetBreakdown10: 'budgetBreakdown10',
    budgetBreakdown11: 'budgetBreakdown11',
    budgetBreakdown12: 'budgetBreakdown12',
}

export const FieldsNames = {
    ...BreakdownFieldsNames,
    name: 'name',
    budgetFrequency: 'budgetFrequency',
    budgetAllocation: 'budgetAllocation',
    baseline: 'baseline'
}
export const DefaultBudgetValue = {
    name: 'New Channel',
    budgetFrequency: ANNUAL,
    baseline: 0,
    budgetAllocation: EQUAL
}