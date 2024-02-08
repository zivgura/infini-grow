export const BUDGET_FREQUENCY = 'Budget frequency';
export const BUDGET_ALLOCATION = 'Budget Allocation';
export const EQUAL = 'Equal';
export const MANUAL = 'Manual';
export const ANNUAL = 'Annual';
export const MONTHLY = 'Monthly';
export const QUARTERLY = 'Quarterly';

export const BudgetFrequencyOptions = [
    {
        value: ANNUAL,
        label: ANNUAL
    },
    {
        value: MONTHLY,
        label: MONTHLY
    },
    {
        value: QUARTERLY,
        label: QUARTERLY
    }
];

export const BudgetAllocationOptions = [EQUAL, MANUAL]
export const MenuPositioningObject = {
    anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
    },
    transformOrigin: {
        vertical: 'top',
        horizontal: 'right',
    }
}