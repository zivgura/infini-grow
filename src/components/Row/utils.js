import { theme } from '../../theme';
import { DATA, HEADER } from './constants';

export function getRowStyleByType(type){
    switch (type){
        case DATA:
            return {
                color: theme.colors.blue,
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '20px',
            }
        case HEADER:
            return {
                color: theme.colors.lightGray,
                fontSize: '11px',
                fontWeight: '700',
                lineHeight: '16px'
            }
        default:
            return {
                color: theme.colors.blue,
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '20px',
            }
    }
}
