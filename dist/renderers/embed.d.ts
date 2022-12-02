import type { CSSProperties } from 'react';
type EmbedOutputData = {
    embed: string;
    width?: number;
    height?: number;
    caption?: string;
};
type EmbedOutputClassNames = {
    video?: string;
    figure?: string;
    figcaption?: string;
};
type EmbedOutputStyles = {
    video?: CSSProperties;
    figure?: CSSProperties;
    figcaption?: CSSProperties;
};
type EmbedOutputProps = {
    data: EmbedOutputData;
    style?: EmbedOutputStyles;
    classNames?: EmbedOutputClassNames;
    config?: ErrConfig;
};
declare const EmbedOutput: ({ data, style, classNames, config }: EmbedOutputProps) => JSX.Element;
export default EmbedOutput;
