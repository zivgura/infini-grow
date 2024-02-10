import { MenuItem, Select as SelectMui } from '@mui/material';
import PropTypes from 'prop-types';
import { getInputStyle } from '../../theme';

export default function Select({name, value, options, onBlur, onChange, color}) {
    const fontStyle = getInputStyle(color)
    return (
        <SelectMui
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            fullWidth
            sx={fontStyle}
        >
            {options?.map(({value, label}, index) =>
                <MenuItem
                    key={index}
                    value={value}
                    sx={fontStyle}
                >
                    {label}
                </MenuItem>
            )}
        </SelectMui>
    )
}

Select.propTypes = {
    value: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any,
        label: PropTypes.string
    })).isRequired,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
}
