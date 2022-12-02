import type { CSSProperties } from 'react';
type TableOutputData = {
    content: string[][];
};
type TableOutputClassNames = {
    table?: string;
    tr?: string;
    th?: string;
    td?: string;
};
type TableOutputStyles = {
    table?: CSSProperties;
    tr?: CSSProperties;
    th?: CSSProperties;
    td?: CSSProperties;
};
type TableOutputProps = {
    data: TableOutputData;
    style?: TableOutputStyles;
    classNames?: TableOutputClassNames;
    config?: ErrConfig;
};
declare const TableOutput: ({ data, style, classNames, config }: TableOutputProps) => JSX.Element;
export default TableOutput;
