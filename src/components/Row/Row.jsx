import PropTypes from 'prop-types';
import { ROW_TYPES } from './constants';
import { RowBodyContainer, RowContainer, RowDataValueContainer, RowTitleContainer } from './Row.style';
import { getRowStyleByType } from './utils';

export function Row({values, title, type, startAdornment}) {
    const rowStyle = getRowStyleByType(type);
    return (
        <RowContainer>
            <RowTitleContainer style={rowStyle.TITLE}>
                {title}
            </RowTitleContainer>
            <RowBodyContainer>
                {values?.map((value, index) => (
                    <RowDataValueContainer
                        key={index}
                        style={rowStyle.FIELD}
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

Row.propTypes = {
    values: PropTypes.array,
    title: PropTypes.node,
    type: PropTypes.oneOf(ROW_TYPES)
}
