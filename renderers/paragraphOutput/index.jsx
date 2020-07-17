/** ParagraphOutput
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component - Adombang Munang Mbomndih
  * @version 1.0.2 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import paragraphOutputStyle from './paragraphOutputStyle';
//#endregion

const ParagraphOutput = ({ data, style, config }) => {
  if (!data) return '';
  if (!style || typeof style !== 'object') style = {};

  const paragraphStyle = config.disableDefaultStyle ? style : { ...paragraphOutputStyle, ...style };
  let content = null;

  if (typeof data === 'string') content = data;
  else if (typeof data === 'object' && data.text && typeof data.text === 'string') content = data.text;

  return content ? <p style={ paragraphStyle }>{ ReactHtmlParser(content) }</p> : '';
};

export default ParagraphOutput;
