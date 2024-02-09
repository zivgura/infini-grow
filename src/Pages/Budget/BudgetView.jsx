import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import CollapsableRows from '../../components/CollapsableRows/CollapsableRows';
import { BudgetRows } from '../../components/BudgetRows/BudgetRows';
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
    TabsLabels
} from "./constants";
import Tabs from "../../components/Tabs/Tabs";
import { addRowToUIAndStorage, deleteRowFromUiAndStorage, initStorage } from './utils';

export default function BudgetView() {
    const [activeTab, setActiveTab] = useState(TabsLabels?.[0])
    const [rowsData, setRowsData] = useState([])
    const [openRowId, setOpenRowId] = useState(null)

    useEffect(() => {
        initStorage(setRowsData);

        return () => {
        };
    }, []);

    function addRow() {
        addRowToUIAndStorage({rowsData, setRowsData, setOpenRowId});
    }

    function deleteRow(id) {
        deleteRowFromUiAndStorage({id, rowsData, setRowsData})
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
            <Tabs
                tabsLabels={TabsLabels}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            {activeTab === TabsLabels[0]
                ? <CollapsableRows
                    rowsData={rowsData}
                    openRowId={openRowId}
                    setOpenRowId={setOpenRowId}
                    deleteRow={deleteRow}
                />
                : <BudgetRows
                    rowsData={rowsData}
                />
            }
        </BudgetViewContainer>
    )
}
