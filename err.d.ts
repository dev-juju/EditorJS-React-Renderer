import type { CSSProperties } from 'react'

declare global {

  // GENERICS
  type ErrConfig = {
    disableDefaultStyle: boolean
  }

  type ErrOutputData = {
    blocks: ErrBlock[]
    time?: number
    version?: string
  }

  type ErrBlock = { type: 'checklist', data: ChecklistOutputData }
    | { type: 'codebox', data: CodeBoxOutputData }
    | { type: 'delimiter', data: DelimiterOutputData }
    | { type: 'embed', data: EmbedOutputData }
    | { type: 'header', data: HeaderOutputData }
    | { type: 'image', data: ImageOutputData }
    | { type: 'list', data: ListOutputData }
    | { type: 'paragraph', data: ParagraphOutputData }
    | { type: 'quote', data: QuoteOutputData }
    | { type: 'table', data: TableOutputData }
    | { type: 'video', data: VideoOutputData }
    | { type: 'warning', data: WarningOutputData }
    | { type: 'linktool', data: LinktoolOutputData }
    | { type: 'personality', data: PersonalityOutputData }

  type ErrOutputProps = {
    data: ErrOutputData
    style?: ErrOutputStyle
    classNames?: ErrOutputClassNames
    config?: ErrOutputConfig
    renderers?: ErrOutputRenderers
  }

  type ErrOutputConfig = {
    checklist?: ErrConfig
    codebox?: ErrConfig
    delimiter?: ErrConfig
    embed?: ErrConfig
    header?: ErrConfig
    image?: ErrConfig
    list?: ErrConfig
    paragraph?: ErrConfig
    quote?: ErrConfig
    table?: ErrConfig
    video?: ErrConfig
    warning?: ErrConfig
    linktool?: ErrConfig
    personality?: ErrConfig
  }

  type ErrOutputClassNames = {
    checklist?: ChecklistOutputClassNames
    codebox?: CodeBoxOutputClassNames
    delimiter?: DelimiterOutputClassNames
    embed?: EmbedOutputClassNames
    header?: HeaderOutputClassNames
    image?: ImageOutputClassNames
    list?: ListOutputClassNames
    paragraph?: string
    quote?: QuoteOutputClassNames
    table?: TableOutputClassNames
    video?: VideoOutputClassNames
    warning?: WarningOutputClassNames
    linktool?: LinkToolOutputClassNames
    personality?: PersonalityOutputClassNames
  }

  type ErrOutputStyle = {
    checklist?: ChecklistOutputStyles
    codebox?: CodeBoxOutputStyles
    delimiter?: DelimiterOutputStyles
    embed?: EmbedOutputStyles
    header?: HeaderOutputStyles
    image?: ImageOutputStyles
    list?: ListOutputStyles
    paragraph?: CSSProperties
    quote?: QuoteOutputStyles
    table?: TableOutputStyles
    video?: VideoOutputStyles
    warning?: WarningOutputStyles
    linktool?: LinkToolOutputStyles
    personality?: PersonalityOutputStyles
  }

  type ErrOutputRenderers = {
    checklist?: (props: ChecklistOutputProps) => JSX.Element
    codebox?: (props: CodeBoxOutputProps) => JSX.Element
    delimiter?: (props: DelimiterOutputProps) => JSX.Element
    embed?: (props: EmbedOutputProps) => JSX.Element
    header?: (props: HeaderOutputProps) => JSX.Element
    image?: (props: ImageOutputProps) => JSX.Element
    list?: (props: ListOutputProps) => JSX.Element
    paragraph?: (props: ParagraphOutputProps) => JSX.Element
    quote?: (props: QuoteOutputProps) => JSX.Element
    table?: (props: TableOutputProps) => JSX.Element
    video?: (props: VideoOutputProps) => JSX.Element
    warning?: (props: WarningOutputProps) => JSX.Element
    linktool?: (props: LinkToolOutputProps) => JSX.Element
    personality?: (props: PersonalityOutputProps) => JSX.Element
  }
}
