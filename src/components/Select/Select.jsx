import { MenuItem, Select as SelectMui } from '@mui/material';
import PropTypes from 'prop-types';
import { getInputStyle } from '../../theme';

export default function Select({value, options, onBlur, onChange, color}) {
    const fontStyle = getInputStyle(color)
    return (
        <SelectMui
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            fullWidth
            sx={fontStyle}
        >
            {options?.map(({value, label}) =>
                <MenuItem
                    value={value}
                    sx={fontStyle}
                >
                    {label}
                </MenuItem>
            )}
        </SelectMui>
    )
}

Select.PropType = {
    value: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.string
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
}
