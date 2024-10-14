import { Router, Route, Set } from '@redwoodjs/router'

import AppLayout from './layouts/AppLayout/AppLayout'
import { CssBaseline, ThemeProvider } from '@mui/material'
import LightTheme from './themes/lightTheme'

const Routes = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <CssBaseline />
            <Router>
                <Set wrap={AppLayout}>
                    <Route path="/" page={HomePage} name="home" />
                    <Route path="/feed" page={FeedPage} name="feed" />
                </Set>
                <Route notfound page={NotFoundPage} />
            </Router>
        </ThemeProvider>
    )
}

export default Routes
