import PropTypes from 'prop-types';
import {
    FieldTypes
} from './constants';
import { FieldContainer, FieldLabel, FieldValue } from './Field.style';
import { getFieldLabelByType, getFieldValueByType } from './utils';

export default function Field(props) {
    const {formik, name, width, onChange} = props;
    function handleChange({target}) {
        formik.setFieldValue(name, target.value)
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

Field.PropType = {
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
}
