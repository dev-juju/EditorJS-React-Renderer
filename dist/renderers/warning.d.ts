import type { CSSProperties } from 'react';
type WarningOutputData = {
    message: string;
    title?: string;
};
type WarningOutputClassNames = {
    container?: string;
    icon?: string;
    title?: string;
    message?: string;
};
type WarningOutputStyles = {
    container?: CSSProperties;
    icon?: CSSProperties;
    title?: CSSProperties;
    message?: CSSProperties;
};
type WarningOutputProps = {
    data: WarningOutputData;
    style?: WarningOutputStyles;
    classNames?: WarningOutputClassNames;
    config?: ErrConfig;
};
declare const WarningOutput: ({ data, style, classNames, config }: WarningOutputProps) => JSX.Element;
export default WarningOutput;
