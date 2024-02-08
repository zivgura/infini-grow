import { Menu as MenuMui, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';

export default function Menu({anchorEl, menuOptions, open, setOpen, positionObject}) {
    return (
        <MenuMui
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setOpen(false)}
            anchorOrigin={positionObject.anchorOrigin}
            transformOrigin={positionObject.transformOrigin}
        >
            {menuOptions?.map((menuOption, index) =>
                <MenuItem id={`menu-item-${index}`} onClick={menuOption.onClick}>
                    {menuOption.label}
                </MenuItem>
            )}
        </MenuMui>
    )
}
Menu.PropType = {
    anchorEl: PropTypes.node.isRequired,
    menuOptions: PropTypes.arrayOf(PropTypes.shape({
        onClick: PropTypes.func,
        label: PropTypes.node
    })).isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}
