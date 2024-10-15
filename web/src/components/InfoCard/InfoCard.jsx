import { Box, Button, Typography } from '@mui/material'
import InfoCardContainer from './InfoCardContainer'
import { colorToRGBA } from 'src/utils/functions'

/**
 * @name InforCard
 * @description INFORMATION CARD COMPONENT
 * @param {*} logo CARD IMAGE OR LOGO SHOWING
 * @param {*} title CARD TITLE
 * @param {*} description CARD DESCRIPTION
 * @param {*} color CARD COLOR
 * @param {*} width CARD WIDTH => 25, 50, 75, 100
 * @param {*} height CARD HEIGHT => small, normal, large
 * @param {*} hasPadding DOES CARD HAS PADDING?
 * @param {*} isTitleCard IS IT TITLE CARD?
 * @param {*} background BACKGROUND IMAGE
 * @returns {JSX.Element} INFO CARD COMPONENT
 */
const InfoCard = ({
    logo,
    logoAlt = 'Card logo',
    title,
    ctaText,
    ctaLink,
    description,
    color,
    width = '25',
    height = 'normal',
    hasPadding = false,
    isTitleCard = false,
    children,
    ...cardProps
}) => {
    // SETTING LOCAL VARIABLES
    let cardClasses = ['card'],
        cardSx = {}

    // SETTING CONDITIONALS
    // SETTING CARD WIDTH CLASS
    if (width === '25') {
        cardClasses.push('card-w1')
    } else if (width === '50') {
        cardClasses.push('card-w2')
    } else if (width === '75') {
        cardClasses.push('card-w3')
    } else if (width === '100') {
        cardClasses.push('card-wfull')
    }

    // SETTING CARD HEIGHT CLASS
    if (height === 'small') {
        cardClasses.push('card-small')
    } else if (height === 'normal') {
        cardClasses.push('card-normal')
    } else if (height === 'large') {
        cardClasses.push('card-large')
    }

    // SETTING CARD PADDING CLASS
    if (hasPadding) {
        cardClasses.push('card-padding')
    }

    // SETTING TITLE CARD CLASS
    if (isTitleCard) {
        cardClasses.push('card-title')
    }

    // IF CARD COLOR HAS BEEN PASSED
    if (color) {
        cardSx = {
            background: color ? colorToRGBA(color, '0.075') : 'inherit',
            ...(cardProps?.sx || {}),
        }
    } else {
        cardSx = cardProps?.sx || {}
    }

    return (
        <InfoCardContainer
            {...cardProps}
            sx={cardSx}
            elevation={1}
            className={cardClasses.join(' ')}
        >
            <Box>
                {logo && <img src={logo} alt={logoAlt} className="card-logo" />}
                {title && (
                    <Typography variant="body2" className="card-title">
                        {title}
                    </Typography>
                )}
                {description && (
                    <Typography
                        variant="body3"
                        component="pre"
                        className="card-description"
                    >
                        {description}
                    </Typography>
                )}
                {ctaLink && ctaText && (
                    <Button
                        size="small"
                        component="a"
                        variant="contained"
                        href={ctaLink}
                        className="card-button"
                        target="_blank"
                        sx={(theme) => {
                            return {
                                background: color || theme.palette.primary.main,
                            }
                        }}
                    >
                        {ctaText}
                    </Button>
                )}
            </Box>
            <Box>{children}</Box>
        </InfoCardContainer>
    )
}

export default InfoCard
