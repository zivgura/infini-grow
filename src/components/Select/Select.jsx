import { MenuItem, Select as SelectMui } from '@mui/material';
import PropTypes from 'prop-types';

export default function Select({value, options, onBlur, onChange}) {
    return (
        <SelectMui
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            fullWidth
        >
            {options?.map(({value, label}) =>
                <MenuItem value={value}>{label}</MenuItem>
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
