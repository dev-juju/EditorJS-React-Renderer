/** EmbedOutput
  *
  * @version 1.0.0
  * @created - 2020.05.25
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter - Adombang Munang Mbomndih
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter - Adombang Munang Mbomndih
  *
  */

//#region imports
import React from 'react';
import parse from 'html-react-parser';
import embedOutputStyle from './style';
//#endregion

const supportedKeys = ['video', 'figure', 'figcaption'];

const EmbedOutput = ({ data, style, classNames, config }: ErrRendererProps) => {
  if (!data || !data.embed) return '';
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const iframeStyle = config.disableDefaultStyle ? style.video : { ...embedOutputStyle.iframeStyle, ...style.video };

  if (data.width) iframeStyle.width = data.width;
  if (data.height) iframeStyle.height = data.height;

  const figureStyle = config.disableDefaultStyle ? style.figure : { ...embedOutputStyle.figureStyle, ...style.figure };
  const figcaptionStyle = config.disableDefaultStyle ? style.figcaption : { ...embedOutputStyle.figcaptionStyle, ...style.figcaption };

  return (
    <figure style={ figureStyle } className={ classNames.figure }>
      <iframe src={ data.embed } style={ iframeStyle } className={ classNames.video }></iframe>
      { data.caption && <figcaption style={ figcaptionStyle } className={ classNames.figcaption }>{ parse(data.caption) }</figcaption> }
    </figure>
  );
};

export default EmbedOutput;
