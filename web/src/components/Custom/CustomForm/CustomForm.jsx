import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/material'
import { DevTool } from '@hookform/devtools'
import config from '../../../../config'

const CustomForm = ({
    devMode = config.REDWOOD_ENV_ENV !== 'PRODUCTION',
    control,
    children = null,
    disableLoginByEnterKey = false,
    onSubmit = () => {},
    ...props
}) => {
    // SETTING HOOKS
    const myFormRef = useRef(null)

    // SETTING SIDE EFFECTS
    // PREVENTING FORM SUBMISSION ON ENTER PRESS
    useEffect(() => {
        if (!disableLoginByEnterKey && myFormRef.current) {
            myFormRef.current.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    event.preventDefault()
                }
            })
        }
    }, [myFormRef.current])

    return (
        <>
            <Box
                {...props}
                noValidate
                ref={myFormRef}
                component="form"
                onSubmit={onSubmit}
            >
                {children}
            </Box>
            {devMode === true && (
                <DevTool control={control} placement="bottom-left" />
            )}
        </>
    )
}

export default CustomForm
