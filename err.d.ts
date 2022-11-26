import { CSSProperties } from 'react'

// Checklist
type ChecklistOutputItemData = {
  text: string
  checked: boolean
}

type ChecklistOutputData = {
  items: ChecklistOutputItemData[]
}

type ChecklistOutputClassNames = {
  container?: string
  item?: string
  checkbox?: string
  label?: string
}

type ChecklistOutputStyles = {
  container?: CSSProperties
  item?: CSSProperties
  checkbox?: CSSProperties
  label?: CSSProperties
}

type ChecklistOutputProps = {
  data: ChecklistOutputData
  style?: ChecklistOutputStyles
  classNames?: ChecklistOutputClassNames
  config?: ErrConfig
}

// CodeBox
type CodeBoxOutputData = {
  code: string
  theme?: string
  language?: string
}

type CodeBoxOutputClassNames = {
  container?: string
  code?: string
}

type CodeBoxOutputStyles = {
  container?: CSSProperties
  code?: CSSProperties
}

export type CodeBoxOutputProps = {
  data: CodeBoxOutputData
  style?: CodeBoxOutputStyles
  classNames?: CodeBoxOutputClassNames
  config?: ErrConfig
}

// Delimiter
type DelimiterOutputClassNames = {
  container?: string
  svg?: string
  path?: string
}

type DelimiterOutputStyles = {
  container?: CSSProperties
  svg?: CSSProperties
  path?: CSSProperties
}

type DelimiterOutputProps = {
  style?: DelimiterOutputStyles
  classNames?: DelimiterOutputClassNames
  config?: ErrConfig
}

// Embed
type EmbedOutputData = {
  embed: string
  width?: number
  height?: number
  caption?: string
}

type EmbedOutputClassNames = {
  video?: string
  figure?: string
  figcaption?: string
}

type EmbedOutputStyles = {
  video?: CSSProperties
  figure?: CSSProperties
  figcaption?: CSSProperties
}

type EmbedOutputProps = {
  data: EmbedOutputData
  style?: EmbedOutputStyles
  classNames?: EmbedOutputClassNames
  config?: ErrConfig
}

// Header
type HeaderOutputData = {
  text: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

type HeaderOutputClassNames = {
  h1?: string
  h2?: string
  h3?: string
  h4?: string
  h5?: string
  h6?: string
}

type HeaderOutputStyles = {
  h1?: CSSProperties
  h2?: CSSProperties
  h3?: CSSProperties
  h4?: CSSProperties
  h5?: CSSProperties
  h6?: CSSProperties
}

type HeaderOutputProps = {
  data: HeaderOutputData
  style?: HeaderOutputStyles
  classNames?: HeaderOutputClassNames
  config?: ErrConfig
}

// Image
type ImageOutputData = {
  file: { url: string }
  caption?: string
  stretched?: boolean
  withBorder?: boolean
  withBackground?: boolean
}

type ImageOutputClassNames = {
  img?: string
  figure?: string
  figcaption?: string
}

type ImageOutputStyles = {
  img?: CSSProperties
  figure?: CSSProperties
  figcaption?: CSSProperties
}

type ImageOutputProps = {
  data: ImageOutputData
  style?: ImageOutputStyles
  classNames?: ImageOutputClassNames
  config?: ErrConfig
}

// LinkTool
type LinkToolOutputData = {
  link: string
  meta?: {
    title?: string
    description?: string
    site_name?: string
    image?: { url: string }
  }
}

type LinkToolOutputClassNames = {
  container?: string
  textHolder?: string
  title?: string
  description?: string
  image?: string
  siteName?: string
}

type LinkToolOutputStyles = {
  container?: CSSProperties
  textHolder?: CSSProperties
  title?: CSSProperties
  description?: CSSProperties
  image?: CSSProperties
  siteName?: CSSProperties
}

type LinkToolOutputProps = {
  data: LinkToolOutputData
  style?: LinkToolOutputStyles
  classNames?: LinkToolOutputClassNames
  config?: ErrConfig
}

// List
type ListOutputData = {
  items: string[]
  style?: 'ordered' | 'unordered'
}

type ListOutputClassNames = {
  container?: string
  listItem?: string
}

type ListOutputStyles = {
  container?: CSSProperties
  listItem?: CSSProperties
}

type ListOutputProps = {
  data: ListOutputData
  style?: ListOutputStyles
  classNames?: ListOutputClassNames
  config?: ErrConfig
}

// Paragraph
type ParagraphOutputData = {
  text: string
}

export type ParagraphOutputProps = {
  data: string | ParagraphOutputData
  style?: CSSProperties
  className?: string
  config?: ErrConfig
}

// Personality
type PersonalityOutputData = {
  link: string
  name?: string
  description?: string
  photo?: string
}

type PersonalityOutputClassNames = {
  container?: string
  textHolder?: string
  description?: string
  name?: string
  link?: string
  photo?: string
}

type PersonalityOutputStyles = {
  container?: CSSProperties
  textHolder?: CSSProperties
  description?: CSSProperties
  name?: CSSProperties
  link?: CSSProperties
  photo?: CSSProperties
}

type PersonalityOutputProps = {
  data: PersonalityOutputData
  style?: PersonalityOutputStyles
  classNames?: PersonalityOutputClassNames
  config?: ErrConfig
}

// Quote
type QuoteOutputData = {
  text: string
  caption?: string
  alignment?: string
}

type QuoteOutputClassNames = {
  container?: string
  content?: string
  author?: string
  message?: string
}

type QuoteOutputStyles = {
  container?: CSSProperties
  content?: CSSProperties
  author?: CSSProperties
  message?: CSSProperties
}

export type QuoteOutputProps = {
  data: QuoteOutputData
  style?: QuoteOutputStyles
  classNames?: QuoteOutputClassNames
  config?: ErrConfig
}

export type QuoteProps = {
  author?: string
  message: string
  style: QuoteOutputStyles
  classNames: QuoteOutputClassNames
  config: ErrConfig
}

// Warning
type WarningOutputData = {
  message: string
  title?: string
}

type WarningOutputClassNames = {
  container?: string
  icon?: string
  title?: string
  message?: string
}

type WarningOutputStyles = {
  container?: CSSProperties
  icon?: CSSProperties
  title?: CSSProperties
  message?: CSSProperties
}

type WarningOutputProps = {
  data: WarningOutputData
  style?: WarningOutputStyles
  classNames?: WarningOutputClassNames
  config?: ErrConfig
}

type WarningProps = {
  title: string
  message: string
  style: WarningOutputStyles
  classNames: WarningOutputClassNames
  config: ErrConfig
}

// Table
type TableOutputData = {
  content: string[][]
}

type TableOutputClassNames = {
  table?: string
  tr?: string
  th?: string
  td?: string
}

type TableOutputStyles = {
  table?: CSSProperties
  tr?: CSSProperties
  th?: CSSProperties
  td?: CSSProperties
}

type TableOutputProps = {
  data: TableOutputData
  style?: TableOutputStyles
  classNames?: TableOutputClassNames
  config?: ErrConfig
}

// Video
type VideoOutputData = {
  url: string
  caption?: string
  autoPlay?: boolean
  muted?: boolean
  controls?: boolean
  stretched?: boolean
  withBorder?: boolean
  withBackground?: boolean
}

type VideoOutputClassNames = {
  video?: string
  figure?: string
  figcaption?: string
}

type VideoOutputStyles = {
  video?: CSSProperties
  figure?: CSSProperties
  figcaption?: CSSProperties
}

type VideoOutputProps = {
  data: VideoOutputData
  style?: VideoOutputStyles
  classNames?: VideoOutputClassNames
  config?: ErrConfig
}

// GENERICS
type ErrConfig = {
  disableDefaultStyle: boolean
}

type ErrOutputData = {
  blocks: ErrBlock[]
  time?: number
  version?: string
}

export type ErrBlock = { type: 'checklist', data: ChecklistOutputData }
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

export type ErrOutputProps = {
  data: ErrOutputData
  style?: ErrOutputStyle
  classNames?: ErrOutputClassNames
  config?: ErrOutputConfig
  renderers: ErrOutputRenderers
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
