/// <reference types="react" />
import HeaderOutput from './renderers/header';
import ParagraphOutput from './renderers/paragraph';
import ImageOutput from './renderers/image';
import VideoOutput from './renderers/video';
import EmbedOutput from './renderers/embed';
import ListOutput from './renderers/list';
import QuoteOutput from './renderers/quote';
import ChecklistOutput from './renderers/checklist';
import WarningOutput from './renderers/warning';
import TableOutput from './renderers/table';
import DelimiterOutput from './renderers/delimiter';
import CodeBoxOutput from './renderers/codeBox';
import LinkToolOutput from './renderers/linkTool';
import PersonalityOutput from './renderers/personality';
declare const Output: ({ data, style, classNames, config, renderers }: ErrOutputProps) => JSX.Element;
export { HeaderOutput, ParagraphOutput, ImageOutput, VideoOutput, EmbedOutput, TableOutput, CodeBoxOutput, ListOutput, QuoteOutput, ChecklistOutput, WarningOutput, DelimiterOutput, LinkToolOutput, PersonalityOutput, Output as default };
