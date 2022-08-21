declare global {
  interface Window {
    hljs: any
  }

  interface ErrRendererProps {
    data: ErrGenericData
    style?: ErrGenericData
    classNames?: ErrGenericData
    config?: ErrConfig
  }

  interface ErrOutputData {
    blocks: ErrBlock[]
    time?: number
    version?: string
  }

  interface ErrBlock {
    type: string
    data: ErrGenericData
  }

  interface ErrGenericData {
    [key: string]: any
  }

  interface ErrOutputProps {
    data: ErrOutputData
    style?: ErrOutputStyle
    classNames?: ErrOutputClassNames
    config?: ErrOutputConfig
    renderers: ErrOutputRenderers
  }

  interface ErrConfig {
    disableDefaultStyle: boolean
  }

  interface ErrOutputConfig {
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

  interface ErrOutputClassNames {
    checklist?: string
    codebox?: string
    delimiter?: string
    embed?: string
    header?: string
    image?: string
    list?: string
    paragraph?: string
    quote?: string
    table?: string
    video?: string
    warning?: string
    linktool?: string
    personality?: string
  }

  interface ErrOutputStyle {
    checklist?: ErrGenericData
    codebox?: ErrGenericData
    delimiter?: ErrGenericData
    embed?: ErrGenericData
    header?: ErrGenericData
    image?: ErrGenericData
    list?: ErrGenericData
    paragraph?: ErrGenericData
    quote?: ErrGenericData
    table?: ErrGenericData
    video?: ErrGenericData
    warning?: ErrGenericData
    linktool?: ErrGenericData
    personality?: ErrGenericData
  }

  interface ErrOutputRenderers {
    checklist?: ReactNode
    codebox?: ReactNode
    delimiter?: ReactNode
    embed?: ReactNode
    header?: ReactNode
    image?: ReactNode
    list?: ReactNode
    paragraph?: ReactNode
    quote?: ReactNode
    table?: ReactNode
    video?: ReactNode
    warning?: ReactNode
    linktool?: ReactNode
    personality?: ReactNode
  }
}

export {};
