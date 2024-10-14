import { Router, Route, Set } from '@redwoodjs/router'
import AppLayout from './layouts/AppLayout/AppLayout'
import { CssBaseline, ThemeProvider } from '@mui/material'
import LightTheme from './themes/lightTheme'
import useStore from './state/store'
import DarkTheme from './themes/darkTheme'

const Routes = () => {
    // ACCESING GLOBAL STORE
    const { isDarkMode } = useStore() || {}

    return (
        <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
            <CssBaseline />
            <Router>
                <Set wrap={AppLayout}>
                    <Route path="/" page={HomePage} name="home" />
                    <Route path="/feed" page={FeedPage} name="feed" />
                </Set>
                <Route path="/login" page={LoginPage} name="login" />
                <Route notfound page={NotFoundPage} />
            </Router>
        </ThemeProvider>
    )
}

export default Routes
