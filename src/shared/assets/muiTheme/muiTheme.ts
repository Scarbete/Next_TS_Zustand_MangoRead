import { createTheme } from '@mui/material'


export const theme = createTheme({
    components: {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        backgroundColor: '#2FE09B',
                        color: 'white',
                    },
                    '&:not(.Mui-selected)': {
                        color: '#A5A5A5',
                    },
                    '& .MuiPaginationItem-icon': {
                        color: '#A5A5A5',
                    },
                    '&.MuiPaginationItem-ellipsis': {
                        color: '#A5A5A5',
                    },
                },
            },
        },
    },
})