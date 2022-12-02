import type { CSSProperties } from 'react';
type ParagraphOutputData = {
    text: string;
};
type ParagraphOutputProps = {
    data: string | ParagraphOutputData;
    style?: CSSProperties;
    className?: string;
    config?: ErrConfig;
};
declare const ParagraphOutput: ({ data, style, className, config }: ParagraphOutputProps) => JSX.Element;
export default ParagraphOutput;
