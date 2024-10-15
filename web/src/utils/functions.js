/**
 * @name colorToRGBA
 * @description METHOD TO CONVERT RGB() OR HEX TO RGBA()
 * @param {*} colorString "RGB(...)" OR "#RRGGBB"
 * @param {*} alpha ALPHA VALUE
 * @returns {String} "RGBA(...)"
 */
const colorToRGBA = (colorString, alpha) => {
    // Check if the input is an rgb() string
    if (colorString.startsWith('rgb')) {
        // Extract the RGB values from the string
        const rgbValues = colorString.match(/\d+/g)

        if (rgbValues && rgbValues.length === 3 && alpha >= 0 && alpha <= 1) {
            const [r, g, b] = rgbValues
            return `rgba(${r}, ${g}, ${b}, ${alpha})`
        } else {
            throw new Error('Invalid rgb string or alpha value')
        }
    }

    // Check if the input is a hex code
    if (colorString.startsWith('#')) {
        let hex = colorString.replace(/^#/, '')

        // If shorthand hex (#f00), convert to full form (#ff0000)
        if (hex.length === 3) {
            hex = hex
                .split('')
                .map((char) => char + char)
                .join('')
        }

        if (hex.length === 6 && alpha >= 0 && alpha <= 1) {
            const r = parseInt(hex.slice(0, 2), 16)
            const g = parseInt(hex.slice(2, 4), 16)
            const b = parseInt(hex.slice(4, 6), 16)

            return `rgba(${r}, ${g}, ${b}, ${alpha})`
        } else {
            throw new Error('Invalid hex string or alpha value')
        }
    }

    throw new Error('Invalid color format')
}

export { colorToRGBA }
