import PropTypes from 'prop-types';
import { Tooltip } from '@mui/material';
import {
    FieldTypes
} from './constants';
import { FieldContainer, FieldLabel, FieldValue } from './Field.style';
import { getFieldLabelByType, getFieldValueByType, getNumericValue } from './utils';
import { ReactComponent as InfoIcon } from "../../assets/info-icon.svg";


export default function Field(props) {
    const {formik, name, width, onChange, tooltip} = props;

    function handleChange({target}) {
        let value = target?.value
        value = getNumericValue(value)
        formik.setFieldValue(name, value)
        if (onChange) {
            onChange({target})
        }
    }

    const innerProps = {...props, handleChange: handleChange}
    const label = getFieldLabelByType(innerProps)
    const value = getFieldValueByType(innerProps)

    return (
        <FieldContainer width={width}>
            {label &&
                <FieldLabel>
                    {label}
                    {tooltip &&
                        <Tooltip
                            title={tooltip}
                            placement={'top'}
                            arrow
                        >
                            <InfoIcon/>
                        </Tooltip>
                    }
                </FieldLabel>
            }
            {value &&
                <FieldValue>
                    {value}
                </FieldValue>
            }
        </FieldContainer>
    )
}

Field.propTypes = {
    formik: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    type: PropTypes.oneOf(FieldTypes),
    fieldProps: PropTypes.any,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    width: PropTypes.string,
    color: PropTypes.string,
    tooltip: PropTypes.string,
    disabled: PropTypes.bool
}
