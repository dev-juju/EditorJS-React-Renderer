import type { CSSProperties } from 'react';
type ChecklistOutputItemData = {
    text: string;
    checked: boolean;
};
type ChecklistOutputData = {
    items: ChecklistOutputItemData[];
};
type ChecklistOutputClassNames = {
    container?: string;
    item?: string;
    checkbox?: string;
    label?: string;
};
type ChecklistOutputStyles = {
    container?: CSSProperties;
    item?: CSSProperties;
    checkbox?: CSSProperties;
    label?: CSSProperties;
};
type ChecklistOutputProps = {
    data: ChecklistOutputData;
    style?: ChecklistOutputStyles;
    classNames?: ChecklistOutputClassNames;
    config?: ErrConfig;
};
declare const ChecklistOutput: ({ data, style, classNames, config }: ChecklistOutputProps) => JSX.Element;
export default ChecklistOutput;
