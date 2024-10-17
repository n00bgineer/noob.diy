import CustomTabContainer from './CustomTabContainer'

const CustomTab = ({ size, color, ...props }) => {
    // SETTING SIZE CLASS
    let sizeClass = 'MuiTab-sizeNormal MuiTab-iconSizeNormal'
    if (size === 'small') sizeClass = 'MuiTab-sizeSmall MuiTab-iconSizeSmall'
    else if (size === 'large')
        sizeClass = 'MuiTab-sizeLarge MuiTab-iconSizeLarge'

    // SETTING COLOR CLASS
    let colorClass = 'MuiTab-primary'
    if (color === 'secondary') colorClass = 'MuiTab-secondary'

    return (
        <CustomTabContainer
            {...props}
            className={`${
                props.className ? props.className : ''
            } ${sizeClass} ${colorClass}`}
        />
    )
}
export default CustomTab
