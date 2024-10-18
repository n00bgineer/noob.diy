import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomTextFieldContainer = styled(TextField)(({ theme }) => ({
    '&.MuiTextField-root': {
        borderRadius: theme.spacing(2),
    },
}))

export default CustomTextFieldContainer
