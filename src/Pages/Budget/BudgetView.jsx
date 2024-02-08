import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import CollapsableRows from '../../components/CollapsableRows/CollapsableRows';
import {
    BudgetViewContainer,
    HeaderContainer,
    SubHeaderContainer,
    SubTitleContainer,
    TitleContainer
} from "./Budget.style";
import { BUDGET_HEADER, BUDGET_SUB_TITLE, BUDGET_TITLE, BUTTON_TEXT, DefaultBudget, TabsLabels } from "./constants";
import Tabs from "../../components/Tabs/Tabs";
import { clear, save, updateUI } from '../../utils';

export default function BudgetView() {
    const [rowsData, setRowsData] = useState([])

    useEffect(() => {
        const rowsDataFromStorage = JSON.parse(window.localStorage?.getItem('budgets'));
        if (rowsDataFromStorage)
            updateUI(setRowsData);
        return clear;
    }, []);

    function addRow() {
        const nextIndex = rowsData.length;
        setRowsData([DefaultBudget, ...rowsData])
        save(DefaultBudget, nextIndex)
    }

    return (
        <BudgetViewContainer>
            <HeaderContainer>
                {BUDGET_HEADER}
            </HeaderContainer>
            <SubHeaderContainer>
                <TitleContainer>
                    {BUDGET_TITLE}
                </TitleContainer>
                <SubTitleContainer>
                    {BUDGET_SUB_TITLE}
                    <Button onClick={addRow} text={BUTTON_TEXT}/>
                </SubTitleContainer>
            </SubHeaderContainer>
            <Tabs tabsLabels={TabsLabels}/>
            <CollapsableRows
                rowsData={rowsData}
                setRowsData={setRowsData}
            />
        </BudgetViewContainer>
    )
}
