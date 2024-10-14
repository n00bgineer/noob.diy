import { Box, Link, Typography } from '@mui/material'
import HeaderContainer from './HeaderContainer'
import { Link as RouterLink, routes, useLocation } from '@redwoodjs/router'
import AppLogo from 'src/assets/logo.png'

const Header = () => {
    // SETTING HOOKS
    const { pathname } = useLocation()

    // SETTING LOCAL VARIABLES
    const links = [
        {
            route: routes.home(),
            name: 'Home',
            className: `${
                pathname === routes.home() ? 'link link-selected' : 'link'
            }`,
        },
        {
            route: routes.feed(),
            name: 'Feed',
            className: `${
                pathname === routes.feed() ? 'link link-selected' : 'link'
            }`,
        },
    ]

    return (
        <HeaderContainer>
            <img src={AppLogo} alt="App logo" className="appLogo" />
            <Box>
                {links.map((link) => {
                    const { route, name, className } = link || {}
                    console.log(link)

                    return (
                        <Link
                            key={name}
                            component={RouterLink}
                            to={route}
                            underline="none"
                            className={className}
                        >
                            {name}
                        </Link>
                    )
                })}
            </Box>
        </HeaderContainer>
    )
}

export default Header
