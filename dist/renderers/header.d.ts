import type { CSSProperties } from 'react';
type HeaderOutputData = {
    text: string;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
};
type HeaderOutputClassNames = {
    h1?: string;
    h2?: string;
    h3?: string;
    h4?: string;
    h5?: string;
    h6?: string;
};
type HeaderOutputStyles = {
    h1?: CSSProperties;
    h2?: CSSProperties;
    h3?: CSSProperties;
    h4?: CSSProperties;
    h5?: CSSProperties;
    h6?: CSSProperties;
};
type HeaderOutputProps = {
    data: HeaderOutputData;
    style?: HeaderOutputStyles;
    classNames?: HeaderOutputClassNames;
    config?: ErrConfig;
};
declare const HeaderOutput: ({ data, style, classNames, config }: HeaderOutputProps) => JSX.Element;
export default HeaderOutput;
