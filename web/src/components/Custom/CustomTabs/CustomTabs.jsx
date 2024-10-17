import { Tabs as MuiTabs } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomTabs = styled(MuiTabs)(({ theme }) => ({
    '&.MuiTabs-root': {
        padding: 'unset',
        marginBottom: theme.spacing(3),
    },
}))

export default CustomTabs
