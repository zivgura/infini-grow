import { Menu as MenuMui, MenuItem as MenuItemMui } from '@mui/material';
import PropTypes from 'prop-types';

export default function Menu({anchorEl, menuOptions, open, setOpen, positionObject}) {
    return (
        <MenuMui
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setOpen(false)}
            anchorOrigin={positionObject?.anchorOrigin}
            transformOrigin={positionObject?.transformOrigin}
            PaperProps={{
                style: {
                    width: 160
                }
            }}
        >
            {menuOptions?.map((menuOption, index) =>
                <MenuItemMui
                    key={index}
                    id={`menu-item-${index}`}
                    onClick={menuOption.onClick}
                    sx={{
                        color: menuOption.color,
                        margin: '0 8px',
                        borderRadius: '4px',
                        height: '40px',
                        ':hover':{
                           backgroundColor: menuOption.backgroundColor
                        }
                    }}
                >
                    {menuOption.label}
                </MenuItemMui>
            )}
        </MenuMui>
    )
}
Menu.propTypes = {
    anchorEl: PropTypes.instanceOf(Element),
    menuOptions: PropTypes.arrayOf(PropTypes.shape({
        onClick: PropTypes.func,
        label: PropTypes.node
    })).isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    positionObject: PropTypes.shape(
        {
            anchorOrigin: PropTypes.shape({
                vertical: PropTypes.string,
                horizontal: PropTypes.string,
            }),
            transformOrigin: PropTypes.shape({
                vertical: PropTypes.string,
                horizontal: PropTypes.string,
            })
        }
    )
}
