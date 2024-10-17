import {
    Form,
    FormError,
    FieldError,
    Label,
    TextField,
    Submit,
} from '@redwoodjs/forms'

const DeletedPostForm = (props) => {
    const onSubmit = (data) => {
        props.onSave(data, props?.deletedPost?.id)
    }

    return (
        <div className="rw-form-wrapper">
            <Form onSubmit={onSubmit} error={props.error}>
                <FormError
                    error={props.error}
                    wrapperClassName="rw-form-error-wrapper"
                    titleClassName="rw-form-error-title"
                    listClassName="rw-form-error-list"
                />

                <Label
                    name="content"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Content
                </Label>

                <TextField
                    name="content"
                    defaultValue={props.deletedPost?.content}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="content" className="rw-field-error" />

                <Label
                    name="slug"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                >
                    Slug
                </Label>

                <TextField
                    name="slug"
                    defaultValue={props.deletedPost?.slug}
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    validation={{ required: true }}
                />

                <FieldError name="slug" className="rw-field-error" />

                <div className="rw-button-group">
                    <Submit
                        disabled={props.loading}
                        className="rw-button rw-button-blue"
                    >
                        Save
                    </Submit>
                </div>
            </Form>
        </div>
    )
}

export default DeletedPostForm
