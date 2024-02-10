import { FormFieldsNames } from '../../Pages/Budget/constants';
import { getShortMonthsWithShortYear } from '../../Pages/Budget/utils';
import { BUDGET_BREAKDOWN_SUBTITLE, BUDGET_BREAKDOWN_TITLE } from '../BudgetCollapsableRow/constants';
import { AMOUNT_TYPE } from '../Field/constants';
import Field from '../Field/Field';
import {
    BudgetBreakdownHeaderContainer,
    BudgetBreakdownSectionContainer, BudgetBreakdownSubTitleContainer, BudgetBreakdownTitleContainer,
    RowBudgetBreakdownContainer
} from './BudgetBreakdown.style';

export default function BudgetBreakdown({formik, onBlur, yearOfCreation, fieldsFontColor, disabled}) {
    return (
        <RowBudgetBreakdownContainer>
            <BudgetBreakdownHeaderContainer>
                <BudgetBreakdownTitleContainer>
                    {BUDGET_BREAKDOWN_TITLE}
                </BudgetBreakdownTitleContainer>
                <BudgetBreakdownSubTitleContainer>
                    {BUDGET_BREAKDOWN_SUBTITLE}
                </BudgetBreakdownSubTitleContainer>
            </BudgetBreakdownHeaderContainer>

            <BudgetBreakdownSectionContainer>
                {getShortMonthsWithShortYear(yearOfCreation)?.map((monthWithYear, index) => {
                    const fieldName = `budgetBreakdown${index+1}`;
                    return (
                        <Field
                            formik={formik}
                            name={FormFieldsNames[fieldName]}
                            label={monthWithYear}
                            type={AMOUNT_TYPE}
                            value={formik.values[FormFieldsNames[fieldName]]}
                            disabled={disabled}
                            width={"160px"}
                            color={fieldsFontColor}
                            onBlur={onBlur}
                        />
                    )
                })}
            </BudgetBreakdownSectionContainer>
        </RowBudgetBreakdownContainer>
    )
}