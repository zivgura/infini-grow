import moment from 'moment/moment';
import { FieldsNames } from '../../Pages/Budget/constants';
import { BUDGET_BREAKDOWN_SUBTITLE, BUDGET_BREAKDOWN_TITLE } from '../BudgetRow/constants';
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
                {moment.monthsShort()?.map((month, index) => {
                    const fieldName = `budgetBreakdown${index+1}`;
                    const lastTwoDigitsOfAYear = yearOfCreation?.toString()?.substring(2,4);
                    return (
                        <Field
                            formik={formik}
                            name={FieldsNames[fieldName]}
                            label={`${month} ${lastTwoDigitsOfAYear}`}
                            type={AMOUNT_TYPE}
                            value={formik.values[FieldsNames[fieldName]]}
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