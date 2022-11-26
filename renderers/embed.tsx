/** EmbedOutput
  *
  * @version 1.0.0
  * @created - 2020.05.25
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.07.17 - Add config parameter
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.1.2 - 2022.11.26 - Redefine types
  *
  */

//#region imports
import parse from 'html-react-parser';
import type { EmbedOutputProps } from '../err';
import type { CSSProperties } from 'react';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const supportedKeys = ['video', 'figure', 'figcaption'];

const defaultStyle: {[key: string]: CSSProperties} = {
  iframeStyle: {
    maxWidth: '100%',
    width: '100%',
    height: '400px',
    maxHeight: '400px',
    borderRadius: '5px',
    boxShadow: 'none',
    outline: 'none',
    border: 'none',
  },
  figureStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
    width: '100%',
    maxWidth: '100%',
    height: '400px',
    maxHeight: '400px',
    overflow: 'hidden',
  },
  figcaptionStyle: {
    padding: '5px 10px',
    fontSize: '12px',
    borderRadius: '2px',
    cursor: 'default',
  }
};


/**********************************************     FUNCTIONS     ******************************************/

const EmbedOutput = ({ data, style, classNames, config }: EmbedOutputProps): JSX.Element => {
  if (!data || !data.embed) return <></>;
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const iframeStyle = config.disableDefaultStyle ? style.video : { ...defaultStyle.iframeStyle, ...style.video };

  if (data.width) iframeStyle['width'] = data.width;
  if (data.height) iframeStyle['height'] = data.height;

  const figureStyle = config.disableDefaultStyle ? style.figure : { ...defaultStyle.figureStyle, ...style.figure };
  const figcaptionStyle = config.disableDefaultStyle ? style.figcaption : { ...defaultStyle.figcaptionStyle, ...style.figcaption };

  return (
    <figure style={ figureStyle } className={ classNames.figure }>
      <iframe src={ data.embed } style={ iframeStyle } className={ classNames.video }></iframe>
      { data.caption && <figcaption style={ figcaptionStyle } className={ classNames.figcaption }>{ parse(data.caption) }</figcaption> }
    </figure>
  );
};

export default EmbedOutput;
