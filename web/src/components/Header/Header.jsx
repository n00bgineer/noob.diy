import {
    Box,
    IconButton,
    Link,
    Menu,
    MenuItem,
    useMediaQuery,
} from '@mui/material'
import HeaderContainer from './HeaderContainer'
import { Link as RouterLink, routes, useLocation } from '@redwoodjs/router'
import AppLogo from 'src/assets/logo.png'
import { DarkMode, LightMode, Menu as MenuIcon } from '@mui/icons-material'
import { useState } from 'react'
import { usePersistentStore } from 'src/state/store'

const Header = () => {
    // SETTING HOOKS
    const { pathname } = useLocation()
    const isMobileViewport = useMediaQuery('(min-width:900px)')

    // ACCESING GLOBAL STATES
    const { isDarkMode, toggleDarkMode } = usePersistentStore() || {}

    // SETTING LOCAL STATES
    const [anchorEl, setAnchorEl] = useState(null)

    // SETTING LOCAL VARIABLES
    const open = Boolean(anchorEl)
    const links = [
        {
            route: routes.home(),
            name: 'Home',
            className: `${
                pathname === routes.home() ? 'link link-selected' : 'link'
            }`,
            selected: pathname === routes.home(),
        },
        {
            route: routes.feed(),
            name: 'Feed',
            className: `${
                pathname === routes.feed() ? 'link link-selected' : 'link'
            }`,
            selected: pathname === routes.feed(),
        },
        {
            route: routes.login(),
            name: 'Login',
            className: 'link',
        },
    ]

    // METHODS
    /**
     * @name handleOpenNavigationMenu
     * @description METHOD TO OPEN NAVIGATION MENU
     * @param {*} event EVENT OBJECT
     * @returns {undefined} undefined
     */
    const handleOpenNavigationMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    /**
     * @name handleCloseNavigationMenu
     * @description METHOD TO CLOSE NAVIGATION MENU
     * @param {*} event EVENT OBJECT
     * @returns {undefined} undefined
     */
    const handleCloseNavigationMenu = () => {
        setAnchorEl(null)
    }

    return (
        <HeaderContainer>
            <img src={AppLogo} alt="App logo" className="appLogo" />
            <Box className="cta-container">
                <IconButton onClick={() => toggleDarkMode()}>
                    {isDarkMode ? <DarkMode /> : <LightMode />}
                </IconButton>
                {!isMobileViewport ? (
                    <>
                        <IconButton onClick={handleOpenNavigationMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleCloseNavigationMenu}
                            MenuListProps={{
                                'aria-labelledby': 'navigation-menu-item',
                            }}
                        >
                            {links.map((link) => {
                                const { route, name, selected } = link || {}

                                return (
                                    <MenuItem
                                        key={name}
                                        component={RouterLink}
                                        to={route}
                                        underline="none"
                                        onClick={handleCloseNavigationMenu}
                                        selected={selected}
                                    >
                                        {name}
                                    </MenuItem>
                                )
                            })}
                        </Menu>
                    </>
                ) : (
                    links.map((link) => {
                        const { route, name, className } = link || {}

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
                    })
                )}
            </Box>
        </HeaderContainer>
    )
}

export default Header
