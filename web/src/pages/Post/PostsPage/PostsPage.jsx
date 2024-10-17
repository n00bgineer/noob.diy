import { useState } from 'react'
import { Link } from '@mui/material'
import Page from 'src/components/Page/Page'
import PostsCell from 'src/components/Post/PostsCell'
import { Link as RouterLink, routes } from '@redwoodjs/router'

const PostsPage = () => {
    return (
        <Page
            headerTitle="Feed"
            headerChildren={
                <Link
                    component={RouterLink}
                    to={routes.newPost()}
                    underline="none"
                    className="link link-selected"
                >
                    Post
                </Link>
            }
        >
            <PostsCell />
        </Page>
    )
}

export default PostsPage
