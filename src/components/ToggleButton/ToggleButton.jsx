import { ToggleButton as Toggle, ToggleButtonGroup } from '@mui/material';
import { FieldsNames } from '../../Pages/Budget/constants';
import { getInputStyle, theme } from '../../theme';

export default function ToggleButton({value, options, onChange}) {
    const itemStyle = getInputStyle(theme.colors.grayBlue)
    return (
        <ToggleButtonGroup
            value={value}
            onChange={onChange}
        >
            {options?.map(option =>
                <Toggle
                    name={FieldsNames.budgetAllocation}
                    value={option}
                    aria-label={option}
                    sx={
                        itemStyle
                    }
                >
                    {option}
                </Toggle>
            )}
        </ToggleButtonGroup>
    )
}
