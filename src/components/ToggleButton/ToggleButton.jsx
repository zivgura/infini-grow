import { ToggleButton as Toggle, ToggleButtonGroup } from '@mui/material';
import { FieldsNames } from '../../Pages/Budget/constants';
import { getInputStyle, theme } from '../../theme';

export default function ToggleButton({value, options, onChange}) {
    const itemStyle = getInputStyle(theme.colors.grayBlue)
    return (
        <ToggleButtonGroup
            id={'toggle'}
            value={value}
            onChange={onChange}
            // color="primary"
        >
            {options?.map(option =>
                <Toggle
                    name={FieldsNames.budgetAllocation}
                    value={option}
                    aria-label={option}
                    sx={{
                        ...itemStyle,
                        boxShadow: theme.shadows.main,
                        background: theme.backgrounds.secondary,
                        '& .MuiToggleButton-root.Mui-selected': {
                            color: theme.colors.darkBlue,
                            background: theme.gradients.main
                        }
                    }}
                >
                    {option}
                </Toggle>
            )}
        </ToggleButtonGroup>
    )
}
