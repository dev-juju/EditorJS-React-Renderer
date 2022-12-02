import type { CSSProperties } from 'react';
type DelimiterOutputClassNames = {
    container?: string;
    svg?: string;
    path?: string;
};
type DelimiterOutputStyles = {
    container?: CSSProperties;
    svg?: CSSProperties;
    path?: CSSProperties;
};
type DelimiterOutputProps = {
    style?: DelimiterOutputStyles;
    classNames?: DelimiterOutputClassNames;
    config?: ErrConfig;
};
declare const DelimiterOutput: ({ style, classNames, config }: DelimiterOutputProps) => JSX.Element;
export default DelimiterOutput;
