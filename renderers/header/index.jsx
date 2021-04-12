/** HeaderOutput
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
import ReactHtmlParser from 'react-html-parser';
import headerOutputStyle from './style';
//#endregion

const HeaderOutput = ({ data, style, classNames, config }) => {
  if (!data) return '';
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = {};
  if (!classNames || typeof classNames !== 'string') classNames = '';

  const headerStyle = config.disableDefaultStyle ? style : { ...headerOutputStyle, ...style };
  let content = null;

  if (typeof data === 'string') content = data;
  else if (typeof data === 'object' && data.text && typeof data.text === 'string') content = data.text;

  if (!content) return '';
  if (typeof data === 'object' && data.level && typeof data.level === 'number') {
    switch (data.level) {
      case 1: return <h1 style={ headerStyle } className={ classNames }>{ ReactHtmlParser(content) }</h1>;
      case 2: return <h2 style={ headerStyle } className={ classNames }>{ ReactHtmlParser(content) }</h2>;
      case 3: return <h3 style={ headerStyle } className={ classNames }>{ ReactHtmlParser(content) }</h3>;
      case 4: return <h4 style={ headerStyle } className={ classNames }>{ ReactHtmlParser(content) }</h4>;
      case 5: return <h5 style={ headerStyle } className={ classNames }>{ ReactHtmlParser(content) }</h5>;
      case 6: return <h6 style={ headerStyle } className={ classNames }>{ ReactHtmlParser(content) }</h6>;
      default: return <h4 style={ headerStyle } className={ classNames }>{ ReactHtmlParser(content) }</h4>;
    }
  }

  return <h4 style={ headerStyle } className={ classNames }>{ ReactHtmlParser(content) }</h4>;
};

export default HeaderOutput;
