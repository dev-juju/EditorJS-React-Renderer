import type { CSSProperties } from 'react';
type VideoOutputData = {
    url?: string;
    file?: {
        url: string;
    };
    caption?: string;
    autoPlay?: boolean;
    muted?: boolean;
    controls?: boolean;
    stretched?: boolean;
    withBorder?: boolean;
    withBackground?: boolean;
};
type VideoOutputClassNames = {
    video?: string;
    figure?: string;
    figcaption?: string;
};
type VideoOutputStyles = {
    video?: CSSProperties;
    figure?: CSSProperties;
    figcaption?: CSSProperties;
};
type VideoOutputProps = {
    data: VideoOutputData;
    style?: VideoOutputStyles;
    classNames?: VideoOutputClassNames;
    config?: ErrConfig;
};
declare const VideoOutput: ({ data, style, classNames, config }: VideoOutputProps) => JSX.Element;
export default VideoOutput;
