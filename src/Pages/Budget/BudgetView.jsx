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
import {
    BUDGET_HEADER,
    BUDGET_SUB_TITLE,
    BUDGET_TITLE,
    BUTTON_TEXT,
    DefaultBudgetValue,
    TabsLabels
} from "./constants";
import Tabs from "../../components/Tabs/Tabs";
import { buildObjectToStorage, getBudgetsFromStorage, remove, save, updateUI } from '../../utils';

export default function BudgetView() {
    const [rowsData, setRowsData] = useState([])
    const [openRowId, setOpenRowId] = useState(null)

    useEffect(() => {
        const rowsDataFromStorage = getBudgetsFromStorage();
        if (rowsDataFromStorage)
            updateUI(setRowsData);

        return () => {
        };
    }, []);

    function addRow() {
        const nextId = rowsData.length;
        const objectToStorage = buildObjectToStorage(DefaultBudgetValue, nextId);
        setRowsData([...rowsData, objectToStorage])
        save(DefaultBudgetValue, nextId)
        setOpenRowId(nextId)
    }

    function deleteRow(id){
        const filteredRowsData = rowsData.filter((budget) => budget.id !== id)
        setRowsData(filteredRowsData);
        remove(id);
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
                openRowId={openRowId}
                setOpenRowId={setOpenRowId}
                deleteRow={deleteRow}
            />
        </BudgetViewContainer>
    )
}
