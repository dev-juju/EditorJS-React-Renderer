/** ParagraphOutput
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
  * @version 1.1.2 - 2022.11.26 - Redefine types
  */

//#region imports
import React from 'react';
import parse from 'html-react-parser';
import type { CSSProperties } from 'react';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const defaultStyle: CSSProperties = {
	margin: '5px 0',
	textAlign: 'left',
};

/**********************************************       TYPES       ******************************************/

type ParagraphOutputData = {
  text: string
}

type ParagraphOutputProps = {
  data: string | ParagraphOutputData
  style?: CSSProperties
  classNames?: string
  config?: ErrConfig
}


/**********************************************     FUNCTIONS     ******************************************/

const ParagraphOutput = ({ data, style, classNames, config }: ParagraphOutputProps): JSX.Element => {
  if (!data) return <></>;
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };

  const paragraphStyle = config.disableDefaultStyle ? style : { ...defaultStyle, ...style };
  let content = null;

  if (typeof data === 'string') content = data;
  else if (typeof data === 'object' && data.text && typeof data.text === 'string') content = data.text;

  return content ? <p style={ paragraphStyle } className={ classNames }>{ parse(content) }</p> : <></>;
};

export default ParagraphOutput;
