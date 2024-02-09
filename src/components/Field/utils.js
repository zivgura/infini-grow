import { TextField } from '@mui/material';
import { forwardRef } from 'react';
import { NumericFormat } from 'react-number-format';
import Select from '../Select/Select';
import ToggleButton from '../ToggleButton/ToggleButton';
import { AMOUNT_TYPE, EDITABLE_LABEL_TYPE, NUMBER_TYPE, SELECT_TYPE, TEXT_TYPE, TOGGLE_TYPE } from './constants';

export const NumericFormatCustom = forwardRef(function NumericFormatCustom(
    props,
    ref,
) {
    const {onChange, ...other} = props;

    return (
        <NumericFormat
            {...other}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            valueIsNumericString
            allowNegative={false}
        />
    );
});

export function getFieldValueByType(props) {
    const {formik, name, value, type, fieldProps, onBlur, handleChange, disabled} = props;
    switch (type) {
        case EDITABLE_LABEL_TYPE:
            if (fieldProps)
                return (
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
                        type={'text'}
                        disabled={disabled}
                    />)
            break;
        case NUMBER_TYPE:
            return (
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
                    disabled={disabled}
                />
            )
        case SELECT_TYPE:
            return (
                <Select
                    name={name}
                    value={value}
                    options={fieldProps}
                    onBlur={onBlur}
                    onChange={handleChange}
                    disabled={disabled}
                />
            )
        case AMOUNT_TYPE:
            return (
                <TextField
                    name={name}
                    variant='outlined'
                    value={value}
                    onBlur={onBlur}
                    onChange={handleChange}
                    size='small'
                    InputProps={{startAdornment: '$'}}
                    fullWidth
                    disabled={disabled}
                />
            )
        case TOGGLE_TYPE:
            return (
                <ToggleButton
                    name={name}
                    value={value}
                    options={fieldProps}
                    onChange={(e) => {
                        handleChange(e)
                        onBlur()
                    }}
                    disabled={disabled}
                />
            )
        case TEXT_TYPE:
            return (
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
                    type={'text'}
                    disabled={disabled}
                />
            )
        default:
            return null;
    }
}

export function getFieldLabelByType({type, label, fieldProps}) {
    switch (type) {
        case EDITABLE_LABEL_TYPE:
            if (!fieldProps) {
                return label
            }
            break;
        case NUMBER_TYPE:
        case SELECT_TYPE:
        case AMOUNT_TYPE:
        case TOGGLE_TYPE:
        case TEXT_TYPE:
            return label
        default:
            return null;
    }
}

export default function onNameFieldBlur(setIsInEditMode, onBlur){
    setIsInEditMode(false);
    onBlur();
}
