import type { CSSProperties } from 'react';
type PersonalityOutputData = {
    link: string;
    name?: string;
    description?: string;
    photo?: string;
};
type PersonalityOutputClassNames = {
    container?: string;
    textHolder?: string;
    description?: string;
    name?: string;
    link?: string;
    photo?: string;
};
type PersonalityOutputStyles = {
    container?: CSSProperties;
    textHolder?: CSSProperties;
    description?: CSSProperties;
    name?: CSSProperties;
    link?: CSSProperties;
    photo?: CSSProperties;
};
type PersonalityOutputProps = {
    data: PersonalityOutputData;
    style?: PersonalityOutputStyles;
    classNames?: PersonalityOutputClassNames;
    config?: ErrConfig;
};
declare const PersonalityOutput: ({ data, style, classNames, config }: PersonalityOutputProps) => JSX.Element;
export default PersonalityOutput;
