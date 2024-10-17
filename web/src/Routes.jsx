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
                <Set wrap={ScaffoldLayout} title="DeletedPosts" titleTo="deletedPosts" buttonLabel="New DeletedPost" buttonTo="newDeletedPost">
                    <Route path="/deleted-posts/new" page={DeletedPostNewDeletedPostPage} name="newDeletedPost" />
                    <Route path="/deleted-posts/{id}/edit" page={DeletedPostEditDeletedPostPage} name="editDeletedPost" />
                    <Route path="/deleted-posts" page={DeletedPostDeletedPostsPage} name="deletedPosts" />
                </Set>
                <Set wrap={ScaffoldLayout} title="DeletedPosts" titleTo="deletedPosts" buttonLabel="New DeletedPost" buttonTo="newDeletedPost">
                </Set>
                <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost">
                    <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
                    <Route path="/posts/{id}/edit" page={PostEditPostPage} name="editPost" />
                    <Route path="/posts/{id}" page={PostPostPage} name="post" />
                    <Route path="/posts" page={PostPostsPage} name="posts" />
                </Set>
                <Set wrap={AppLayout}>
                    <Route path="/" page={HomePage} name="home" prerender />
                    <Route path="/feed" page={FeedPage} name="feed" />
                </Set>
                <Route path="/login" page={LoginPage} name="login" />
                <Route notfound page={NotFoundPage} />
            </Router>
        </ThemeProvider>
    )
}

export default Routes
