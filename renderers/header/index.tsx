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
  * @version 1.2.0 - 2022.04.20 - Add support for applying different styles/classes to each header level - Adombang Munang Mbomndih
  */

//#region imports
import React from 'react';
import parse from 'html-react-parser';
import headerOutputStyle from './style';
//#endregion

const supportedKeys = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const HeaderOutput = ({ data, style, classNames, config }: ErrRendererProps) => {
  if (!data) return <></>;
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'string') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const h1Style = config.disableDefaultStyle ? style.h1 : { ...headerOutputStyle, ...style.h1 };
  const h2Style = config.disableDefaultStyle ? style.h2 : { ...headerOutputStyle, ...style.h2 };
  const h3Style = config.disableDefaultStyle ? style.h3 : { ...headerOutputStyle, ...style.h3 };
  const h4Style = config.disableDefaultStyle ? style.h4 : { ...headerOutputStyle, ...style.h4 };
  const h5Style = config.disableDefaultStyle ? style.h5 : { ...headerOutputStyle, ...style.h5 };
  const h6Style = config.disableDefaultStyle ? style.h6 : { ...headerOutputStyle, ...style.h6 };

  let content = null;

  if (typeof data === 'string') content = data;
  else if (typeof data === 'object' && data.text && typeof data.text === 'string') content = data.text;

  if (!content) return <></>;
  if (typeof data === 'object' && data.level && typeof data.level === 'number') {
    switch (data.level) {
      case 1: return <h1 style={ h1Style } className={ classNames }>{ parse(content) }</h1>;
      case 2: return <h2 style={ h2Style } className={ classNames }>{ parse(content) }</h2>;
      case 3: return <h3 style={ h3Style } className={ classNames }>{ parse(content) }</h3>;
      case 4: return <h4 style={ h4Style } className={ classNames }>{ parse(content) }</h4>;
      case 5: return <h5 style={ h5Style } className={ classNames }>{ parse(content) }</h5>;
      case 6: return <h6 style={ h6Style } className={ classNames }>{ parse(content) }</h6>;
      default: return <h4 style={ h4Style } className={ classNames }>{ parse(content) }</h4>;
    }
  }

  return <h4 style={ h4Style } className={ classNames }>{ parse(content) }</h4>;
};

export default HeaderOutput;
