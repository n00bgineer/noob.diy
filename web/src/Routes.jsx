import { Router, Route, Set } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import AppLayout from './layouts/AppLayout/AppLayout'
import { CssBaseline, ThemeProvider } from '@mui/material'
import LightTheme from './themes/lightTheme'
import DarkTheme from './themes/darkTheme'
import { usePersistentStore } from './state/store'

const Routes = () => {
    // ACCESING GLOBAL STORE
    const { isDarkMode } = usePersistentStore() || {}

    return (
        <ThemeProvider theme={isDarkMode ? DarkTheme : LightTheme}>
            <CssBaseline />
            <Router>
                <Set wrap={AppLayout}>
                    <Route path="/" page={HomePage} name="home" prerender />
                    <Route path="/feed" page={PostPostsPage} name="feed" />
                    <Route path="/post/create" page={PostNewPostPage} name="newPost" />
                    <Route path="/post/{id}/edit" page={PostEditPostPage} name="editPost" />
                    <Route path="/post/{id}" page={PostPostPage} name="post" />
                </Set>
                <Route path="/login" page={LoginPage} name="login" />
                <Route notfound page={NotFoundPage} />
            </Router>
        </ThemeProvider>
    )
}

export default Routes
