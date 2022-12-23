/** HeaderOutput
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component
  * @version 1.0.2 - 2020.07.17 - Add config parameter
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.2.0 - 2022.04.20 - Add support for applying different styles/classes to each header level
  * @version 1.2.1 - 2022.11.26 - Redefine types
  */

//#region imports
import React from 'react';
import parse from 'html-react-parser';
import type { CSSProperties } from 'react';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const supportedKeys = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const defaultStyle: CSSProperties = {
  margin: '8px 0',
  marginTop: '15px',
};


/**********************************************       TYPES       ******************************************/

type HeaderOutputData = {
  text: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

type HeaderOutputClassNames = {
  h1?: string
  h2?: string
  h3?: string
  h4?: string
  h5?: string
  h6?: string
}

type HeaderOutputStyles = {
  h1?: CSSProperties
  h2?: CSSProperties
  h3?: CSSProperties
  h4?: CSSProperties
  h5?: CSSProperties
  h6?: CSSProperties
}

type HeaderOutputProps = {
  data: HeaderOutputData
  style?: HeaderOutputStyles
  classNames?: HeaderOutputClassNames
  config?: ErrConfig
}


/**********************************************     FUNCTIONS     ******************************************/

const HeaderOutput = ({ data, style, classNames, config }: HeaderOutputProps): JSX.Element => {
  if (!data || !data.text || typeof data.text != 'string') return <></>;
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const h1Style = config.disableDefaultStyle ? style.h1 : { ...defaultStyle, ...style.h1 };
  const h2Style = config.disableDefaultStyle ? style.h2 : { ...defaultStyle, ...style.h2 };
  const h3Style = config.disableDefaultStyle ? style.h3 : { ...defaultStyle, ...style.h3 };
  const h4Style = config.disableDefaultStyle ? style.h4 : { ...defaultStyle, ...style.h4 };
  const h5Style = config.disableDefaultStyle ? style.h5 : { ...defaultStyle, ...style.h5 };
  const h6Style = config.disableDefaultStyle ? style.h6 : { ...defaultStyle, ...style.h6 };

  switch (data.level) {
    case 1: return <h1 style={ h1Style } className={ classNames.h1 }>{ parse(data.text) }</h1>;
    case 2: return <h2 style={ h2Style } className={ classNames.h2 }>{ parse(data.text) }</h2>;
    case 3: return <h3 style={ h3Style } className={ classNames.h3 }>{ parse(data.text) }</h3>;
    case 4: return <h4 style={ h4Style } className={ classNames.h4 }>{ parse(data.text) }</h4>;
    case 5: return <h5 style={ h5Style } className={ classNames.h5 }>{ parse(data.text) }</h5>;
    case 6: return <h6 style={ h6Style } className={ classNames.h6 }>{ parse(data.text) }</h6>;
    default: return <h4 style={ h4Style } className={ classNames.h4 }>{ parse(data.text) }</h4>;
  }
};

export default HeaderOutput;
