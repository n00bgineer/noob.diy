import React from 'react'
import { Controller } from 'react-hook-form'
import CustomTextField from '../CustomTextField/CustomTextField'
import CustomMDXEditor from '../CustomMDXEditor/CustomMDXEditor'

// TEXT FIELDS
const TextFieldElement = ({
    name,
    validations,
    defaultValue,
    disabled,
    control,
    ...props
}) => {
    // EXTRACTING ADDITIONAL PROPS
    const { InputProps, ...otherProps } = { ...props } || {}
    const {
        disabled: customDisabled = false,
        onBlur: customOnBlur,
        onChange: onCustomChange,
        ...otherInputProps
    } = InputProps || {}

    return (
        <Controller
            name={name}
            control={control}
            disabled={disabled}
            rules={validations}
            defaultValue={defaultValue}
            render={({ field, fieldState, formState }) => {
                // EXTRACTING RELEVANT DATA
                const { error } = fieldState || {}
                const { isLoading, isSubmitting } = formState || {}
                const {
                    value,
                    disabled,
                    onBlur = () => {},
                    onChange = () => {},
                } = field || {}

                return (
                    <CustomTextField
                        {...otherProps}
                        id={name}
                        name={name}
                        error={error}
                        {...(error ? { helperText: error?.message } : {})}
                        onKeyDown={customOnKeyDown}
                        InputProps={{
                            ...otherInputProps,
                            value,
                            error,
                            disabled:
                                isLoading ||
                                isSubmitting ||
                                disabled ||
                                customDisabled,
                            onBlur: customOnBlur || onBlur,
                            onChange: (event) => {
                                onChange(event)
                                if (typeof onCustomChange === 'function') {
                                    onCustomChange(event)
                                }
                            },
                        }}
                    />
                )
            }}
        />
    )
}

const MDXEditorElement = ({
    name,
    validations,
    defaultValue,
    disabled,
    control,
    ...props
}) => {
    // EXTRACTING ADDITIONAL PROPS
    const { InputProps, ...otherProps } = { ...props } || {}
    const { onChange: onCustomChange } = InputProps || {}

    return (
        <Controller
            name={name}
            control={control}
            disabled={disabled}
            rules={validations}
            defaultValue={defaultValue}
            render={({ field, fieldState, formState }) => {
                // EXTRACTING RELEVANT DATA
                const { error } = fieldState || {}
                const { isLoading, isSubmitting } = formState || {}
                const {
                    value,
                    disabled,
                    onBlur = () => {},
                    onChange = () => {},
                } = field || {}

                return (
                    <CustomMDXEditor
                        {...otherProps}
                        value={value}
                        readOnly={
                            isLoading ||
                            isSubmitting ||
                            disabled ||
                            customDisabled
                        }
                        onBlur={customOnBlur || onBlur}
                        onChange={(value) => {
                            onChange(value)
                            if (typeof onCustomChange === 'function') {
                                onCustomChange(value)
                            }
                        }}
                        {...(error ? { helperText: error?.message } : {})}
                    />
                )
            }}
        />
    )
}

const CustomFormElement = ({ element, control, ...props }) => {
    const {
        name, // DEFULT ELEMENT PROPS
        type,
        disabled,
        validations,
        defaultValue,
    } = element || {}

    if (type === 'text') {
        return (
            <TextFieldElement
                {...{
                    name,
                    validations,
                    defaultValue,
                    disabled,
                    control,
                    ...props,
                }}
            />
        )
    } else if (type === 'mdx') {
        return (
            <MDXEditorElement
                {...{
                    name,
                    validations,
                    defaultValue,
                    disabled,
                    control,
                    ...props,
                }}
            />
        )
    } else {
        return <></>
    }
}

export default CustomFormElement
