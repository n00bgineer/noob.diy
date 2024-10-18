import '@mdxeditor/editor/style.css'
import {
    MDXEditor,
    headingsPlugin,
    quotePlugin,
    listsPlugin,
    thematicBreakPlugin,
    UndoRedo,
    BoldItalicUnderlineToggles,
    toolbarPlugin,
    BlockTypeSelect,
    CreateLink,
    linkPlugin,
    linkDialogPlugin,
} from '@mdxeditor/editor'
import CustomMDXEditorContainer from './CustomMDXEditorContainer'
import { Typography } from '@mui/material'

const CustomMDXEditor = ({
    value = '',
    helperText,
    error,
    onChange = () => {},
    onBlur = () => {},
    ...props
}) => {
    return (
        <CustomMDXEditorContainer>
            <MDXEditor
                markdown={value}
                onBlur={onBlur}
                onChange={onChange}
                plugins={[
                    headingsPlugin(),
                    quotePlugin(),
                    listsPlugin(),
                    thematicBreakPlugin(),
                    linkPlugin(),
                    linkDialogPlugin(),
                    toolbarPlugin({
                        toolbarContents: () => (
                            <>
                                {' '}
                                <UndoRedo />
                                <BoldItalicUnderlineToggles />
                                <CreateLink />
                                <BlockTypeSelect />
                            </>
                        ),
                    }),
                ]}
                contentEditableClassName="mdxeditor-contenteditable"
                {...props}
            />
            {helperText && (
                <Typography
                    variant="body3"
                    component="div"
                    color={error ? 'error' : 'textDisabled'}
                    className="mdx-editor-helper-text"
                >
                    {helperText}
                </Typography>
            )}
        </CustomMDXEditorContainer>
    )
}

export default CustomMDXEditor
