import type { CSSProperties } from 'react';
type ImageOutputData = {
    file: {
        url: string;
    };
    caption?: string;
    stretched?: boolean;
    withBorder?: boolean;
    withBackground?: boolean;
};
type ImageOutputClassNames = {
    img?: string;
    figure?: string;
    figcaption?: string;
};
type ImageOutputStyles = {
    img?: CSSProperties;
    figure?: CSSProperties;
    figcaption?: CSSProperties;
};
type ImageOutputProps = {
    data: ImageOutputData;
    style?: ImageOutputStyles;
    classNames?: ImageOutputClassNames;
    config?: ErrConfig;
};
declare const ImageOutput: ({ data, style, classNames, config }: ImageOutputProps) => JSX.Element;
export default ImageOutput;
