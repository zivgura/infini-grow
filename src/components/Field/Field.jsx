import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import Select from '../Select/Select';
import ToggleButton from '../ToggleButton/ToggleButton';
import { AMOUNT_TYPE, FieldTypes, NUMBER_TYPE, SELECT_TYPE, TOGGLE_TYPE } from './constants';
import { FieldContainer, FieldLabel, FieldValue } from './Field.style';
import { NumericFormatCustom } from './utils';

export default function Field({formik, name, label, value, type, fieldProps, onBlur}) {
    function handleChange({target}) {
        formik.setFieldValue(name, target.value)
    }

    return (
        <FieldContainer>
            {label &&
                <FieldLabel>
                    {label}
                </FieldLabel>}
            {type &&
                <FieldValue>
                    {
                        type === NUMBER_TYPE ?
                            <TextField
                                name={name}
                                variant='outlined'
                                value={value}
                                onBlur={onBlur}
                                onChange={handleChange}
                                size='small'
                                error={formik.errors[name]}
                                helperText={formik.errors[name]}
                                fullWidth
                                InputProps={{
                                    inputComponent: NumericFormatCustom,
                                }}
                            />
                            : type === SELECT_TYPE ?
                                <Select
                                    name={name}
                                    value={value}
                                    options={fieldProps}
                                    onBlur={onBlur}
                                    onChange={handleChange}
                                />
                                : type === AMOUNT_TYPE ?
                                    <TextField
                                        name={name}
                                        variant='outlined'
                                        value={value}
                                        onBlur={onBlur}
                                        onChange={handleChange}
                                        size='small'
                                        InputProps={{startAdornment: '$'}}
                                        fullWidth
                                    />
                                    : type === TOGGLE_TYPE ?
                                        <ToggleButton
                                            name={name}
                                            value={value}
                                            options={fieldProps}
                                            onChange={(e) => {
                                                handleChange(e)
                                                onBlur()
                                            }}
                                        />
                                        : null
                    }
                </FieldValue>}
        </FieldContainer>
    )
}

Field.PropType = {
    formik: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    type: PropTypes.oneOf(FieldTypes),
    fieldProps: PropTypes.any,
    onBlur: PropTypes.func
}
