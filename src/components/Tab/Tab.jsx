import PropTypes from 'prop-types';
import {LabelContainer, TabContainer, UnderlineHighlightContainer} from "./Tabs.style";

export default function Tab({activeTab, label, onClick}){
    const isActiveTab = activeTab === label;
    return (
        <TabContainer onClick={onClick}>
            <LabelContainer isActiveTab={isActiveTab}>
                {label}
            </LabelContainer>
            {isActiveTab && <UnderlineHighlightContainer/>}
        </TabContainer>
    )
}

Tab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}