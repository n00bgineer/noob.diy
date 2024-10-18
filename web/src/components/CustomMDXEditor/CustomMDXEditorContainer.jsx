import { Paper, styled } from '@mui/material'

const CustomMDXEditorContainer = styled(Paper)(({ theme }) => ({
    '&.MuiPaper-root': {
        background:
            theme.palette.mode === 'dark'
                ? theme.palette.background.paper
                : theme.palette.grey[50],
        borderRadius: theme.spacing(1),
        marginTop: theme.spacing(2),
        minHeight: '70vh',
        maxHeight: '70vh',
        overflow: 'auto',

        '& .mdx-editor': {
            color: theme.palette.primary.main,
        },

        '& .mdx-editor-helper-text': {
            marginTop: theme.spacing(0.5),
        },
    },
}))

export default CustomMDXEditorContainer
