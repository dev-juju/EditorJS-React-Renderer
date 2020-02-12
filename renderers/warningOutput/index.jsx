/** WarningOutput
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component - Adombang Munang Mbomndih
 */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Warning from './warning/index.jsx';
//#endregion

const WarningOutput = ({ data, style }) => {
  if (!data) return '';
  if (!style || typeof style !== 'object') style = {};

  let message = null, title = 'Warning';

  if (typeof data === 'string') message = data;
  else if (typeof data === 'object') {
    if (data.message && typeof data.message === 'string') message = data.message;
    if (data.title && typeof data.title === 'string') title = data.title;
  }

  if (!message) return '';
  return <Warning title={ ReactHtmlParser(title) } message={ ReactHtmlParser(message) } customStyle={ style } />;
};

export default WarningOutput;
