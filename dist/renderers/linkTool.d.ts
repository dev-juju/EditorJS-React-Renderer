import type { CSSProperties } from 'react';
type LinkToolOutputData = {
    link: string;
    meta?: {
        title?: string;
        description?: string;
        site_name?: string;
        image?: {
            url: string;
        };
    };
};
type LinkToolOutputClassNames = {
    container?: string;
    textHolder?: string;
    title?: string;
    description?: string;
    image?: string;
    siteName?: string;
};
type LinkToolOutputStyles = {
    container?: CSSProperties;
    textHolder?: CSSProperties;
    title?: CSSProperties;
    description?: CSSProperties;
    image?: CSSProperties;
    siteName?: CSSProperties;
};
type LinkToolOutputProps = {
    data: LinkToolOutputData;
    style?: LinkToolOutputStyles;
    classNames?: LinkToolOutputClassNames;
    config?: ErrConfig;
};
declare const LinkToolOutput: ({ data, style, classNames, config }: LinkToolOutputProps) => JSX.Element;
export default LinkToolOutput;
