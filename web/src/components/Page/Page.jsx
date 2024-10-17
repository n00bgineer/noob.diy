import { Box, Link } from '@mui/material'
import PageHeader from '../PageHeader/PageHeader'
import PageContainer from './PageContainer'

const Page = ({ headerTitle, headerDescription, headerChildren, children }) => {
    return (
        <PageContainer>
            <PageHeader title={headerTitle} description={headerDescription}>
                {headerChildren}
            </PageHeader>
            {children}
        </PageContainer>
    )
}

export default Page
