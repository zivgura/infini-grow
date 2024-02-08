import {useState} from "react";
import PropTypes from 'prop-types';
import Tab from "../Tab/Tab";
import {TabsContainer} from "./Tabs.style";

export default function Tabs({tabsLabels}) {
    const [activeTab, setActiveTab] = useState(tabsLabels?.[0])
    return (
        <TabsContainer>
            {tabsLabels?.map((tabLabel, index) => (
                <Tab
                    key={index}
                    onClick={() => setActiveTab(tabLabel)}
                    label={tabLabel}
                    activeTab={activeTab}
                />
            ))}
        </TabsContainer>
    )
}

Tabs.propTypes = {
    tabsLabels: PropTypes.arrayOf(PropTypes.string).isRequired
}
