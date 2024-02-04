import {
    BudgetViewContainer,
    HeaderContainer,
    SubHeaderContainer,
    SubTitleContainer,
    TitleContainer
} from "./Budget.style";
import {BudgetHeader, BudgetSubTitle, BudgetTitle, TabsLabels} from "./constants";
import Tabs from "../../components/Tabs/Tabs";

export default function BudgetView() {
    return (
        <BudgetViewContainer>
            <HeaderContainer>
                {BudgetHeader}
            </HeaderContainer>
            <SubHeaderContainer>
                <TitleContainer>
                    {BudgetTitle}
                </TitleContainer>
                <SubTitleContainer>
                    {BudgetSubTitle}
                    {/*<Button />*/}
                </SubTitleContainer>
            </SubHeaderContainer>
            <Tabs tabsLabels={TabsLabels}/>
        </BudgetViewContainer>
    )
}
