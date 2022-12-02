import type { CSSProperties } from 'react';
type QuoteOutputData = {
    text: string;
    caption?: string;
    alignment?: string;
};
type QuoteOutputClassNames = {
    container?: string;
    content?: string;
    author?: string;
    message?: string;
};
type QuoteOutputStyles = {
    container?: CSSProperties;
    content?: CSSProperties;
    author?: CSSProperties;
    message?: CSSProperties;
};
type QuoteOutputProps = {
    data: QuoteOutputData;
    style?: QuoteOutputStyles;
    classNames?: QuoteOutputClassNames;
    config?: ErrConfig;
};
declare const QuoteOutput: ({ data, style, classNames, config }: QuoteOutputProps) => JSX.Element;
export default QuoteOutput;
