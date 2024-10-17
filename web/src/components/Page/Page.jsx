import { Box, Link } from '@mui/material'
import PageHeader from '../PageHeader/PageHeader'
import PageContainer from './PageContainer'

const Page = ({ headerTitle, headerChildren, children }) => {
    return (
        <PageContainer>
            <PageHeader title={headerTitle}>{headerChildren}</PageHeader>
            {children}
        </PageContainer>
    )
}

export default Page
