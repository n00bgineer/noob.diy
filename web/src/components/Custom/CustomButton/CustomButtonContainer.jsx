import { Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomButtonContainer = styled(MuiButton)(({ theme }) => ({
    borderRadius: '9999px',
    textTransform: 'none',

    // SIZE STYLES
    '&.MuiButton-sizeSmall': {
        padding: `${theme.spacing(0.5)} ${theme.spacing(1)}!important`,
        fontSize: theme.typography.body2.fontSize,
    },
    '&.MuiButton-sizeMedium': {
        padding: `${theme.spacing(1)} ${theme.spacing(2)}!important`,
        fontSize: theme.typography.body1.fontSize,
    },
    '&.MuiButton-sizeLarge': {
        padding: `${theme.spacing(2)} ${theme.spacing(1)}!important`,
        fontSize: theme.typography.h6.fontSize,
    },

    // ICON SIZE STYLES
    '&.MuiButton-iconSizeSmall': {
        fontSize: theme.typography.body2.fontSize,
    },
    '&.MuiButton-iconSizeMedium': {
        fontSize: theme.typography.body1.fontSize,
    },
    '& .MuiButton-iconSizeLarge': {
        fontSize: theme.typography.h6.fontSize,
    },
}))

export default CustomButtonContainer
