// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import HomePageContainer from './HomePageContainer'
import { Box, Button, Card, Link, Typography } from '@mui/material'
import Map from 'src/assets/map.png'
import Hero from 'src/assets/hero.jpg'
import ResumeLogo from 'src/assets/resume.jpeg'
import GithubLogo from 'src/assets/github.jpeg'
import TwitterLogo from 'src/assets/twitter.jpeg'
import LinkedinLogo from 'src/assets/linkedin.jpeg'
import InstagramLogo from 'src/assets/instagram.jpeg'
import InfoCard from 'src/components/InfoCard/InfoCard'

const HomePage = () => {
    return (
        <>
            <Metadata title="Home" description="Home page" />
            <HomePageContainer>
                <Typography variant="h6">
                    <Typography
                        variant="inherit"
                        component="span"
                        className="name"
                    >
                        AASHISH PANIGRAHI
                    </Typography>{' '}
                    // COMPUTER PROGRAMMER // BUILDING A{' '}
                    <Link
                        component="a"
                        href="https://movingcastle.in"
                        target="_blank"
                    >
                        STARTUP
                    </Link>
                </Typography>
                <InfoCard width="100" height="large" isTitleCard={true}>
                    <img src={Hero} alt="Map" className="full-image" />
                </InfoCard>
                <Box className="card-horizontal-container">
                    <InfoCard
                        logo={ResumeLogo}
                        title="Resume"
                        description="resume_alp.docx"
                        ctaText="Download"
                        ctaLink="https://docs.google.com/document/d/1sOcv646lpTptu1JgR8fsbrTVgpHZY1SUxLevDIWXeys/edit?usp=sharing"
                        hasPadding={true}
                    />
                    <InfoCard
                        logo={TwitterLogo}
                        title="Twitter"
                        description="👨🏻‍💻@🇮🇳 (@asxyzp)"
                        ctaText="View tweets"
                        ctaLink="https://twitter.com/asxyzp"
                        hasPadding={true}
                        color="rgba(29, 161, 242)"
                    />
                    <InfoCard
                        logo={GithubLogo}
                        title="GitHub"
                        description="n00bgineer"
                        ctaText="Follow"
                        ctaLink="https://github.com/n00bgineer"
                        hasPadding={true}
                        width="50"
                    />
                </Box>
                <Box className="card-horizontal-container" sx={{ mb: '32px' }}>
                    <InfoCard
                        width="50"
                        sx={{ position: 'relative' }}
                        link="https://www.google.com/maps/place/Indiranagar,+Bengaluru,+Karnataka/@12.972939,77.6279119,15z/data=!3m1!4b1!4m6!3m5!1s0x3bae16a418770391:0xb50f46b826501036!8m2!3d12.9783692!4d77.6408356!16zL20vMDZ5M3Zj!5m1!1e4?entry=ttu&g_ep=EgoyMDI0MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                    >
                        <img src={Map} alt="Map" className="full-image" />
                        <Typography variant="body2" className="map-location">
                            📍 Bangalore, Karnataka, India
                        </Typography>
                    </InfoCard>
                    <InfoCard
                        logo={LinkedinLogo}
                        title="LinkedIn"
                        description="asxyzp"
                        ctaText="Connect"
                        ctaLink="https://www.linkedin.com/in/asxyzp/"
                        hasPadding={true}
                        color="rgba(0, 114, 177)"
                    />
                    <InfoCard
                        logo={InstagramLogo}
                        title="Instagram"
                        description="asxyzp"
                        ctaText="Follow"
                        ctaLink="https://www.instagram.com/asxyzp"
                        hasPadding={true}
                    />
                </Box>
                {/* TODO: COMPLETE PROJECTS CARD */}
            </HomePageContainer>
        </>
    )
}

export default HomePage
