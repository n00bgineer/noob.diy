import { Tab as MuiTab } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomTabContainer = styled(MuiTab)(({ theme }) => ({
    // COMMON STYLES
    '&.MuiTab-root': {
        borderRadius: '9999px',
        textTransform: 'none',
        minHeight: 'unset',
    },

    // TEXT STYLES
    '& .MuiTab-textColorPrimary': { color: theme.palette.primary.contrastText },
    '& .MuiTab-textColorSecondary': {
        color: theme.palette.secondary.contrastText,
    },

    // SIZE STYLES
    '&.MuiTab-sizeSmall': {
        padding: `${theme.spacing(0.5)} ${theme.spacing(1)}!important`,
        fontSize: theme.typography.body2.fontSize,
    },
    '&.MuiTab-sizeNormal': {
        padding: `${theme.spacing(1)} ${theme.spacing(2)}!important`,
        fontSize: theme.typography.body1.fontSize,
    },
    '&.MuiTab-sizeLarge': {
        padding: `${theme.spacing(2)} ${theme.spacing(1)}!important`,
        fontSize: theme.typography.h6.fontSize,
    },

    // ICON SIZE STYLES
    '&.MuiTab-iconSizeSmall': {
        fontSize: theme.typography.body2.fontSize,
    },
    '&.MuiTab-iconSizeNormal': {
        fontSize: theme.typography.body1.fontSize,
    },
    '& .MuiTab-iconSizeLarge': {
        fontSize: theme.typography.h6.fontSize,
    },

    // COLOR STYLES
    '&.MuiTab-primary.Mui-selected': {
        background: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover': {
            filter: 'brightness(120%)',
        },
    },
    '&.MuiTab-secondary.Mui-selected': {
        background: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            filter: 'brightness(120%)',
        },
    },
}))

export default CustomTabContainer
