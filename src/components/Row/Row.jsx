import PropTypes from 'prop-types';
import { ROW_TYPES } from './constants';
import { RowBodyContainer, RowContainer, RowDataValueContainer, RowHeaderContainer } from './Row.style';
import { getRowStyleByType } from './utils';

export function Row({values, title, type, startAdornment}) {
    const rowStyle = getRowStyleByType(type);
    return (
        <RowContainer>
            <RowHeaderContainer style={rowStyle}>
                {title}
            </RowHeaderContainer>
            <RowBodyContainer>
                {values.map((value) => (
                    <RowDataValueContainer
                        style={rowStyle}
                    >
                        {startAdornment ?
                            `${startAdornment}${value}`
                            : value
                        }
                    </RowDataValueContainer>
                ))}
            </RowBodyContainer>
        </RowContainer>
    )
}

Row.PropType = {
    values: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    type: PropTypes.oneOf(ROW_TYPES)
}
