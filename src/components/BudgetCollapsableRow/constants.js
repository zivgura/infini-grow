export const BUDGET_FREQUENCY = 'Budget frequency';
export const BUDGET_ALLOCATION = 'Budget Allocation';
export const BUDGET_BREAKDOWN_TITLE = 'Budget Breakdown';
export const BUDGET_BREAKDOWN_SUBTITLE = 'By default, your budget will be equally divided throughout the year. You can manually change the budget allocation, either now or later.';
export const BUDGET_FREQUENCY_TOOLTIP = 'Budget frequency tooltip'
export const BUDGET_ALLOCATION_TOOLTIP = 'Budget allocation tooltip'
export const BUDGET_BASELINE_TOOLTIP = 'Budget baseline tooltip'
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