import { Box, styled } from '@mui/material'

const CustomMDXEditorContainer = styled(Box)(({ theme }) => ({
    '&.MuiBox-root': {
        '&> .mdxeditor': {
            background:
                theme.palette.mode === 'dark'
                    ? theme.palette.background.paper
                    : theme.palette.grey[50],
            borderRadius: theme.spacing(1),
            marginTop: theme.spacing(2),
            minHeight: '70vh',
            maxHeight: '70vh',
            overflow: 'auto',
            height: '100%',
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'stretch',

            '&> .mdxeditor-root-contenteditable': {
                minHeight: '100%',
                flexGrow: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',

                '&> .mdxeditor-contenteditable': {
                    color: theme.palette.primary.main,
                    minHeight: '100%',
                    flexGrow: '1',
                },
            },
        },
        '& .mdx-editor-helper-text': {
            marginTop: theme.spacing(0.5),
        },
    },
}))

export default CustomMDXEditorContainer
