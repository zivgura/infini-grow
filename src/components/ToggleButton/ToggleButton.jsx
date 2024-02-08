import { ToggleButton as Toggle, ToggleButtonGroup } from '@mui/material';

export default function ToggleButton({value, options, onChange}) {

    return (
        <ToggleButtonGroup
            value={value}
            onChange={onChange}
        >
            {options?.map(option =>
                <Toggle value={option} aria-label={option}>
                    {option}
                </Toggle>
            )}
        </ToggleButtonGroup>
    )
}
