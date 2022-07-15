declare global {
  interface Window {
    hljs: any;
  }

  interface ErrRendererProps<TClassNames extends keyof ErrOutputClassNames> {
    data: ErrGenericData;
    style?: ErrGenericData;
    classNames: ErrOutputClassNames[TClassNames];
    config?: ErrConfig;
  }

  interface ErrOutputData {
    blocks: ErrBlock[];
    time?: number;
    version?: string;
  }

  interface ErrBlock {
    type: string;
    data: ErrGenericData;
  }

  interface ErrGenericData {
    [key: string]: any;
  }

  interface ErrOutputProps {
    data: ErrOutputData;
    style?: ErrOutputStyle;
    classNames?: ErrOutputClassNames;
    config?: ErrOutputConfig;
    renderers: ErrOutputRenderers;
  }

  interface ErrConfig {
    disableDefaultStyle: boolean;
  }

  interface ErrOutputConfig {
    checklist?: ErrConfig;
    codeBox?: ErrConfig;
    delimiter?: ErrConfig;
    embed?: ErrConfig;
    header?: ErrConfig;
    image?: ErrConfig;
    list?: ErrConfig;
    paragraph?: ErrConfig;
    quote?: ErrConfig;
    table?: ErrConfig;
    video?: ErrConfig;
    warning?: ErrConfig;
    linktool?: ErrConfig;
    personality?: ErrConfig;
  }

  interface ErrOutputClassNames {
    checklist?: {
      container?: string;
      item?: string;
      checkbox?: string;
      label?: string;
    };
    codeBox?: { container?: string; code?: string };
    delimiter?: { container?: string; svg?: string; path?: string };
    embed?: { figure?: string; video?: string; figcaption?: string };
    header?: string;
    image?: { figure?: string; img?: string; figcaption?: string };
    list?: { container?: string; listItem?: string };
    paragraph?: string;
    quote?: string;
    table?: { table?: string; tr?: string; th?: string; td?: string };
    video?: { figure?: string; video?: string; figcaption?: string };
    warning?: string;
    linktool?: {
      container?: string;
      textHolder?: string;
      title?: string;
      description?: string;
      siteName?: string;
      image?: string;
    };
    personality?: {
      container?: string;
      textHolder?: string;
      name?: string;
      description?: string;
      link?: string;
      photo?: string;
    };
  }

  interface ErrOutputStyle {
    checklist?: ErrGenericData;
    codeBox?: ErrGenericData;
    delimiter?: ErrGenericData;
    embed?: ErrGenericData;
    header?: ErrGenericData;
    image?: ErrGenericData;
    list?: ErrGenericData;
    paragraph?: ErrGenericData;
    quote?: ErrGenericData;
    table?: ErrGenericData;
    video?: ErrGenericData;
    warning?: ErrGenericData;
    linktool?: ErrGenericData;
    personality?: ErrGenericData;
  }

  interface ErrOutputRenderers {
    checklist?: ReactNode;
    codeBox?: ReactNode;
    delimiter?: ReactNode;
    embed?: ReactNode;
    header?: ReactNode;
    image?: ReactNode;
    list?: ReactNode;
    paragraph?: ReactNode;
    quote?: ReactNode;
    table?: ReactNode;
    video?: ReactNode;
    warning?: ReactNode;
    linktool?: ReactNode;
    personality?: ReactNode;
  }
}

export {};
