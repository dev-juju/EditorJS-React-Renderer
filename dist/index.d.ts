/** EditorJS-React Renderer
 *
 * A small library that provides functions to parse and render data saved by
 * EditorJS into react components
 *
 * @version 1.0.0
 * @created - 2019.08.20
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
 *
 * Version History
 * ---------------
 * @version 1.0.1 - 2020.02.12 - Covert functions to React component
 *                             - Add CodeBoxOutput
 *                             - Adombang Munang Mbomndih
 * @version 1.0.2 - 2020.05.21 - Add key to list items - Adombang Munang Mbomndih
 * @version 1.0.3 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
 * @version 1.1.0 - 2021.04.11 - Add classNames parameter - Adombang Munang Mbomndih
 * @version 1.2.0 - 2022.05.19 - Add LinkToolOutput and PersonalityOutput - Adombang Munang Mbomndih
 *
 */
/// <reference types="react" />
import ChecklistOutput from "./renderers/checklist/index";
import CodeBoxOutput from "./renderers/codeBox/index";
import DelimiterOutput from "./renderers/delimiter/index";
import EmbedOutput from "./renderers/embed/index";
import HeaderOutput from "./renderers/header/index";
import ImageOutput from "./renderers/image/index";
import LinkToolOutput from "./renderers/linkTool/index";
import ListOutput from "./renderers/list/index";
import ParagraphOutput from "./renderers/paragraph/index";
import PersonalityOutput from "./renderers/personality/index";
import QuoteOutput from "./renderers/quote/index";
import TableOutput from "./renderers/table/index";
import VideoOutput from "./renderers/video/index";
import WarningOutput from "./renderers/warning/index";
declare const Output: ({ data, style, classNames, config, renderers, }: ErrOutputProps) => JSX.Element[];
export { HeaderOutput, ParagraphOutput, ImageOutput, VideoOutput, EmbedOutput, TableOutput, CodeBoxOutput, ListOutput, QuoteOutput, ChecklistOutput, WarningOutput, DelimiterOutput, LinkToolOutput, PersonalityOutput, Output as default, };
