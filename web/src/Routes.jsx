import { Router, Route, Set } from '@redwoodjs/router'

import AppLayout from './layouts/AppLayout/AppLayout'

const Routes = () => {
    return (
        <Router>
            <Set wrap={AppLayout}>
                <Route path="/" page={HomePage} name="home" />
                <Route path="/feed" page={FeedPage} name="feed" />
            </Set>
            <Route notfound page={NotFoundPage} />
        </Router>
    )
}

export default Routes
