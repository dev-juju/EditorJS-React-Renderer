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
  *
  */

//#region imports
import React from 'react';
import HeaderOutput from './renderers/headerOutput/index.jsx';
import ParagraphOutput from './renderers/paragraphOutput/index.jsx';
import ImageOutput from './renderers/imageOutput/index.jsx';
import VideoOutput from './renderers/videoOutput/index.jsx';
import EmbedOutput from './renderers/embedOutput/index.jsx';
import ListOutput from './renderers/listOutput/index.jsx';
import QuoteOutput from './renderers/quoteOutput/index.jsx';
import ChecklistOutput from './renderers/checklistOutput/index.jsx';
import WarningOutput from './renderers/warningOutput/index.jsx';
import TableOutput from './renderers/tableOutput/index.jsx';
import DelimiterOutput from './renderers/delimiterOutput/index.jsx';
import CodeBoxOutput from './renderers/codeBoxOutput/index.jsx';
//#endregion

const Output = ({ data, style, config }) => {
  if (!data || typeof data !== 'object') return '';
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = {};

  return data.blocks.map((block, index) => {
    switch (block.type) {
      case 'codeBox': return <CodeBoxOutput key={ index } data={ block.data } style={ style.codeBox || {}} config={ config.codeBox || {}} />;
      case 'header': return <HeaderOutput key={ index } data={ block.data } style={ style.header || {}} config={ config.header || {}} />;
      case 'paragraph':
        return <ParagraphOutput key={ index } data={ block.data } style={ style.paragraph || {}} config={ config.paragraph || {}} />;
      case 'image': return <ImageOutput key={ index } data={ block.data } style={ style.image || {}} config={ config.image || {}} />;
      case 'video': return <VideoOutput key={ index } data={ block.data } style={ style.video || {}} config={ config.video || {}} />;
      case 'embed': return <EmbedOutput key={ index } data={ block.data } style={ style.embed || {}} config={ config.embed || {}} />;
      case 'table': return <TableOutput key={ index } data={ block.data } style={ style.table || {}} config={ config.table || {}} />;
      case 'list': return <ListOutput key={ index } data={ block.data } style={ style.list || {}} config={ config.list || {}} />;
      case 'checklist':
        return <ChecklistOutput key={ index } data={ block.data } style={ style.checklist || {}} config={ config.checklist || {}} />;
      case 'quote': return <QuoteOutput key={ index } data={ block.data } style={ style.quote || {}} config={ config.quote || {}} />;
      case 'warning': return <WarningOutput key={ index } data={ block.data } style={ style.warning || {}} config={ config.warning || {}} />;
      case 'delimiter': return <DelimiterOutput key={ index } style={ style.delimiter || {}} config={ config.delimiter || {}} />;

      default: return '';
    }
  });
};

export {
  HeaderOutput, ParagraphOutput, ImageOutput, EmbedOutput, TableOutput, CodeBoxOutput, ListOutput, QuoteOutput,
  ChecklistOutput, WarningOutput, DelimiterOutput, Output as default
};
