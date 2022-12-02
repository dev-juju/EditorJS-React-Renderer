import type { CSSProperties } from 'react';
type ListOutputData = {
    items: string[];
    style?: 'ordered' | 'unordered';
};
type ListOutputClassNames = {
    container?: string;
    listItem?: string;
};
type ListOutputStyles = {
    container?: CSSProperties;
    listItem?: CSSProperties;
};
type ListOutputProps = {
    data: ListOutputData;
    style?: ListOutputStyles;
    classNames?: ListOutputClassNames;
    config?: ErrConfig;
};
declare const ListOutput: ({ data, style, classNames, config }: ListOutputProps) => JSX.Element;
export default ListOutput;
