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
  */

//#region imports
import React from 'react';
import HeaderOutput from './renderers/headerOutput/index.jsx';
import ParagraphOutput from './renderers/paragraphOutput/index.jsx';
import ImageOutput from './renderers/imageOutput/index.jsx';
import ListOutput from './renderers/listOutput/index.jsx';
import QuoteOutput from './renderers/quoteOutput/index.jsx';
import WarningOutput from './renderers/warningOutput/index.jsx';
import TableOutput from './renderers/tableOutput/index.jsx';
import DelimiterOutput from './renderers/delimiterOutput/index.jsx';
import CodeBoxOutput from './renderers/codeBoxOutput/index.jsx';
//#endregion

const Output = ({ data, style }) => {
  if (!data || typeof data !== 'object') return '';
  if (!style || typeof style !== 'object') style = {};

  return data.blocks.map(block => {
    switch (block.type.toLowerCase()) {
      case 'codebox': return <CodeBoxOutput data={ block.data } style={ style.codeBox || {}} />;
      case 'header': return <HeaderOutput data={ block.data } style={ style.header || {}} />;
      case 'paragraph': return <ParagraphOutput data={ block.data } style={ style.paragraph || {}} />;
      case 'image': return <ImageOutput data={ block.data } style={ style.image || {}} />;
      case 'table': return <TableOutput data={ block.data } style={ style.table || {}} />;
      case 'list': return <ListOutput data={ block.data } style={ style.list || {}} />;
      case 'quote': return <QuoteOutput data={ block.data } style={ style.quote || {}} />;
      case 'warning': return <WarningOutput data={ block.data } style={ style.warning || {}} />;
      case 'delimiter': return <DelimiterOutput style={ style.delimiter || {}} />;

      default: return '';
    }
  });
};

export {
  HeaderOutput, ParagraphOutput, ImageOutput, TableOutput, CodeBoxOutput, ListOutput, QuoteOutput, WarningOutput, DelimiterOutput,
  Output as default
};
