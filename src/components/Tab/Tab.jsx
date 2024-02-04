import PropTypes from 'prop-types';
import {LabelContainer, TabContainer, UnderlineHighlightContainer} from "./Tabs.style";

export default function Tab({activeTab, label, onClick}){

    return (
        <TabContainer onClick={onClick}>
            <LabelContainer activeTab={activeTab}>
                {label}
            </LabelContainer>
            {activeTab === label && <UnderlineHighlightContainer/>}
        </TabContainer>
    )
}

Tab.propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}