import Header from 'src/components/Header/Header'
import Footer from 'src/components/Footer/Footer'
import AppLayoutContainer from './AppLayoutContainer'
import { ThemeProvider } from '@mui/material'
import LightTheme from 'src/themes/lightTheme'

const AppLayout = ({ children }) => {
    return (
        <AppLayoutContainer>
            <Header />
            {children}
            <Footer />
        </AppLayoutContainer>
    )
}

export default AppLayout
