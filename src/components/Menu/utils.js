import { theme } from '../../theme';

export const getMenuOptions = ({id, setIsInEditMode, deleteRow}) => [
    {
        onClick: () => {
            setIsInEditMode(true)
        },
        label: 'Edit',
        color: theme.colors.blue,
        backgroundColor: theme.colors.lightGray
    },
    {
        onClick: () => {
            deleteRow(id)
        },
        label: 'Remove',
        color: theme.colors.red,
        backgroundColor: theme.colors.lightRed
    }
]