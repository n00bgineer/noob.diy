// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const FeedPage = () => {
    return (
        <>
            <Metadata title="Feed" description="Feed page" />

            <h1>FeedPage</h1>
            <p>
                Find me in <code>./web/src/pages/FeedPage/FeedPage.jsx</code>
            </p>
            {/*
        My default route is named `feed`, link to me with:
        `<Link to={routes.feed()}>Feed</Link>`
        */}
        </>
    )
}

export default FeedPage
