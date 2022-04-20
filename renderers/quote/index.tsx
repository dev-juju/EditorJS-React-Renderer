/** QuoteOutput
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component - Adombang Munang Mbomndih
  * @version 1.0.2 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter - Adombang Munang Mbomndih
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter - Adombang Munang Mbomndih
  */

//#region imports
import React from 'react';
import parse from 'html-react-parser';
import Quote from './quote/index';
//#endregion

const supportedKeys = ['container', 'content', 'author', 'message'];

const QuoteOutput = ({ data, style, classNames, config }: ErrRendererProps) => {
  if (!data) return '';
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  let content = null;
  let caption = 'Unknown';

  if (typeof data === 'string') content = data;
  else if (typeof data === 'object' && data.text && typeof data.text === 'string') {
    content = data.text;
    if (data.caption && typeof data.caption === 'string') caption = data.caption;
    if (data.alignment && typeof data.alignment === 'string') style.textAlign = data.alignment;
  }

  if (!content) return '';
  return <Quote author={ parse(caption) } message={ parse(content) } style={ style as any } classNames={ classNames } config={ config } />;
};

export default QuoteOutput;
