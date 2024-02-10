import { theme } from '../../theme';
import { DATA, HEADER } from './constants';

export function getRowStyleByType(type) {
    switch (type) {
        case DATA:
            return {
                FIELD: {
                    color: theme.colors.blue,
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '20px',
                    maxWidth: '80px'
                },
                TITLE: {
                    color: theme.colors.blue,
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '20px',
                }
            }
        case HEADER:
            return {
                FIELD: {
                    color: theme.colors.lightGray,
                    fontSize: '11px',
                    fontWeight: '700',
                    lineHeight: '16px'
                },
                TITLE: {
                    color: theme.colors.lightGray,
                    fontSize: '11px',
                    fontWeight: '700',
                    lineHeight: '16px',
                }
            }
        default:
            return {
                FIELD: {
                    color: theme.colors.blue,
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '20px',
                    maxWidth: '80px'
                },
                TITLE: {
                    color: theme.colors.blue,
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '20px',
                }
            }
    }
}
