import type { CSSProperties } from 'react';
type ParagraphOutputData = {
    text: string;
};
type ParagraphOutputProps = {
    data: string | ParagraphOutputData;
    style?: CSSProperties;
    classNames?: string;
    config?: ErrConfig;
};
declare const ParagraphOutput: ({ data, style, classNames, config }: ParagraphOutputProps) => JSX.Element;
export default ParagraphOutput;
