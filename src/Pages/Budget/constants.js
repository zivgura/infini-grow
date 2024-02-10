import PropTypes from 'prop-types';
import { ANNUAL, EQUAL } from '../../components/BudgetCollapsableRow/constants';
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

export const FormFieldsNames = {
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

export const RowDataProps = PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.shape({
            name: PropTypes.string,
            baseline: PropTypes.number,
            budgetFrequency: PropTypes.string,
            budgetAllocation: PropTypes.string,
            budgetBreakdown1: PropTypes.number,
            budgetBreakdown2: PropTypes.number,
            budgetBreakdown3: PropTypes.number,
            budgetBreakdown4: PropTypes.number,
            budgetBreakdown5: PropTypes.number,
            budgetBreakdown6: PropTypes.number,
            budgetBreakdown7: PropTypes.number,
            budgetBreakdown8: PropTypes.number,
            budgetBreakdown9: PropTypes.number,
            budgetBreakdown10: PropTypes.number,
            budgetBreakdown11: PropTypes.number,
            budgetBreakdown12: PropTypes.number,
        }),
        date: PropTypes.string
    })