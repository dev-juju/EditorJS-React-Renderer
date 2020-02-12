/** HeaderOutput
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
import headerOutputStyle from './headerOutputStyle';
//#endregion

const HeaderOutput = ({ data, style }) => {
  if (!data) return '';
  if (!style || typeof style !== 'object') style = {};

  const headerStyle = { ...headerOutputStyle, ...style };
  let content = null;

  if (typeof data === 'string') content = data;
  else if (typeof data === 'object' && data.text && typeof data.text === 'string') content = data.text;

  if (!content) return '';
  if (typeof data === 'object' && data.level && typeof data.level === 'number') {
    switch (data.level) {
      case 1: return <h1 style={ headerStyle }>{ ReactHtmlParser(content) }</h1>;
      case 2: return <h2 style={ headerStyle }>{ ReactHtmlParser(content) }</h2>;
      case 3: return <h3 style={ headerStyle }>{ ReactHtmlParser(content) }</h3>;
      case 4: return <h4 style={ headerStyle }>{ ReactHtmlParser(content) }</h4>;
      case 5: return <h5 style={ headerStyle }>{ ReactHtmlParser(content) }</h5>;
      case 6: return <h6 style={ headerStyle }>{ ReactHtmlParser(content) }</h6>;
      default: return <h4 style={ headerStyle }>{ ReactHtmlParser(content) }</h4>;
    }
  }

  return <h4 style={ headerStyle }>{ ReactHtmlParser(content) }</h4>;
};

export default HeaderOutput;
