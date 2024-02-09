import { Form, FormikProvider } from 'formik';
import { useEffect, useRef, useState } from 'react';
import Menu from '../Menu/Menu';
import {
    ArrowDownIconContainer,
    CollapsableRowContainer,
    LeftSectionContainer,
    RightSectionContainer,
    RowBodyContainer,
    RowHeaderContainer,
    RowTitleContainer
} from "./CollapsableRow.style";
import Collapse from "@mui/material/Collapse";
import { ReactComponent as ArrowDownIcon } from "../../assets/arrow-down-icon.svg";
import { ReactComponent as KebabMenuIcon } from "../../assets/kebab-icon.svg";
import {
    MenuPositioningObject,
} from '../BudgetRow/constants';

export default function CollapsableRow({
    id,
    formik,
    isRowOpen,
    setOpenRowId,
    rowHeader,
    menuOptions,
    rowBody
}) {
    const menuRef = useRef(null)
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        if (menuRef) {
            setAnchorEl(menuRef.current)
        }
    }, [menuRef]);


    function onMenuClick(e) {
        e.stopPropagation()
        setOpenMenu(!openMenu)
    }

    return (
        <CollapsableRowContainer
            id={id}
            isRowOpen={isRowOpen}
        >
            <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <RowHeaderContainer
                        open={isRowOpen}
                        onClick={() => setOpenRowId(isRowOpen ? null : id)}
                    >
                        <LeftSectionContainer>
                            <ArrowDownIconContainer open={isRowOpen}>
                                <ArrowDownIcon/>
                            </ArrowDownIconContainer>
                            <RowTitleContainer>
                                {rowHeader}
                            </RowTitleContainer>
                        </LeftSectionContainer>
                        <RightSectionContainer onClick={onMenuClick} ref={menuRef}>
                            <KebabMenuIcon/>
                            <Menu
                                menuOptions={menuOptions}
                                anchorEl={anchorEl}
                                open={openMenu}
                                setOpen={setOpenMenu}
                                positionObject={MenuPositioningObject}
                            />
                        </RightSectionContainer>
                    </RowHeaderContainer>
                    <Collapse in={isRowOpen} timeout="auto">
                        <RowBodyContainer>
                            {rowBody}
                        </RowBodyContainer>
                    </Collapse>
                </Form>
            </FormikProvider>
        </CollapsableRowContainer>
    )
}
