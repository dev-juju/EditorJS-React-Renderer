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
  * @version 1.0.2 - 2020.05.21 - Add key to list items
  * @version 1.0.3 - 2020.07.17 - Add config parameter
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.2.0 - 2022.05.19 - Add LinkToolOutput and PersonalityOutput
  * @version 1.3.0 - 2022.08.21 - Allow custom renderers for unsupported blocks
  * @version 1.3.1 - 2022.11.26 - Redefine types
  */

//#region imports
import React from 'react';
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
import type { ErrOutputProps } from './err';
//#endregion

const Output = ({ data, style, classNames, config, renderers }: ErrOutputProps): JSX.Element[] => {
  if (!data || typeof data !== 'object') return [];
  if (!style || typeof style !== 'object') style = {};
  if (!classNames || typeof classNames !== 'object') classNames = {};
  if (!config || typeof config !== 'object') config = {};
  if (!renderers || typeof renderers !== 'object') renderers = {};

  return data.blocks.map((block, i) => {
    const key = block.type.toLowerCase();
    let Renderer = renderers[key] || getDefaultRenderer(key);

    if (!Renderer) return <></>;

    return <Renderer key={ i } data={ block.data } style={ style[key] || {}} config={ config[key] || {}} classNames={ classNames[key] || {}} />;
  });
};

const getDefaultRenderer = (key: string) => {
  switch (key) {
    case 'codebox': return CodeBoxOutput;
    case 'header': return HeaderOutput;
    case 'paragraph': return ParagraphOutput;
    case 'image': return ImageOutput;
    case 'video': return VideoOutput;
    case 'embed': return EmbedOutput;
    case 'table': return TableOutput;
    case 'list': return ListOutput;
    case 'checklist': return ChecklistOutput;
    case 'quote': return QuoteOutput;
    case 'warning': return WarningOutput;
    case 'linktool': return LinkToolOutput;
    case 'personality': return PersonalityOutput;
    case 'delimiter': return DelimiterOutput;
    default: return null;
  }
};

export {
  HeaderOutput, ParagraphOutput, ImageOutput, VideoOutput, EmbedOutput, TableOutput, CodeBoxOutput, ListOutput, QuoteOutput,
  ChecklistOutput, WarningOutput, DelimiterOutput, LinkToolOutput, PersonalityOutput, Output as default
};
