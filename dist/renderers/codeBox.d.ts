import type { CSSProperties } from 'react';
type CodeBoxOutputData = {
    code: string;
    theme?: string;
    language?: string;
};
type CodeBoxOutputClassNames = {
    container?: string;
    code?: string;
};
type CodeBoxOutputStyles = {
    container?: CSSProperties;
    code?: CSSProperties;
};
type CodeBoxOutputProps = {
    data: CodeBoxOutputData;
    style?: CodeBoxOutputStyles;
    classNames?: CodeBoxOutputClassNames;
    config?: ErrConfig;
};
declare const CodeBoxOutput: ({ data, style, classNames, config }: CodeBoxOutputProps) => JSX.Element;
export default CodeBoxOutput;
