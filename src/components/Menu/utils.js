
export const getMenuOptions = ({id, setIsInEditMode, deleteRow}) => [
    {
        onClick: () => {
            setIsInEditMode(true)
        },
        label: 'Edit'
    },
    {
        onClick: () => {
            deleteRow(id)
        },
        label: 'Remove'
    }
]