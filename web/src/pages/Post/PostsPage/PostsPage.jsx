import { useState } from 'react'
import { Link } from '@mui/material'
import Page from 'src/components/Page/Page'
import PostsCell from 'src/components/Post/PostsCell'
import { Link as RouterLink, routes } from '@redwoodjs/router'
import CustomTabs from 'src/components/Custom/CustomTabs/CustomTabs'
import CustomTab from 'src/components/Custom/CustomTab/CustomTab'
import DeletedPostsCell from 'src/components/DeletedPost/DeletedPostsCell'

const PostsPage = () => {
    // SETTING LOCAL STATES
    const [tabIndex, setTabIndex] = useState(0)

    // SETTING METHODS
    /**
     * @name handleTabChange
     * @description METHOD TO SET TAB VALUE
     * @param {*} event EVENT OBJECT
     * @param {*} value VALUE
     * @returns {undefined} undefined
     */
    const handleTabChange = (event, value) => setTabIndex(value)

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
            <CustomTabs
                value={tabIndex}
                onChange={handleTabChange}
                TabIndicatorProps={{
                    sx: { display: 'none' },
                }}
                sx={(theme) => {
                    return { my: theme.spacing(2) }
                }}
            >
                <CustomTab label="Posts" size="normal" />
                <CustomTab label="Deleted" size="normal" />
            </CustomTabs>
            {tabIndex === 0 && <PostsCell />}
            {tabIndex === 1 && <DeletedPostsCell />}
        </Page>
    )
}

export default PostsPage
