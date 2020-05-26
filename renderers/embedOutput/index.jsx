/** EmbedOutput
  *
  * @version 1.0.0
  * @created - 2020.05.25
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  *
  */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import embedOutputStyle from './embedOutputStyle';
//#endregion

const supportedStyles = ['video', 'figure', 'figcaption'];

const EmbedOutput = ({ data, style }) => {
  if (!data || !data.embed) return '';
  if (!style || typeof style !== 'object') style = {};

  supportedStyles.forEach(customStyle => {
    if (!style[customStyle] || typeof style[customStyle] !== 'object') style[customStyle] = {};
  });

  const iframeStyle = {
    ...embedOutputStyle.iframeStyle,
    ...style.video,
  };

  if (data.width) iframeStyle.width = data.width;
  if (data.height) iframeStyle.height = data.height;

  const figureStyle = {
    ...embedOutputStyle.figureStyle,
    ...style.figure
  };
  const figcaptionStyle = {
    ...embedOutputStyle.figcaptionStyle,
    ...style.figcaption
  };

  return (
    <figure style={ figureStyle }>
      <iframe src={ data.embed } style={ iframeStyle }></iframe>
      { data.caption && <figcaption style={ figcaptionStyle }>{ ReactHtmlParser(data.caption) }</figcaption> }
    </figure>
  );
};

export default EmbedOutput;
