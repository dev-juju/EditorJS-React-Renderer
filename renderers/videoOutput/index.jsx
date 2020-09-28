/** VideoOutput
  *
  * @version 1.0.0
  * @created - 2020.09.28
  * @author - Tomáš Hylský <thylsky@gmail.com> (https://linktr.ee/thylsky)
  *
  * Version History
  * ---------------
  */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import videoOutputStyle from './videoOutputStyle';
//#endregion

const supportedStyles = ['video', 'figure', 'figcaption'];

const VideoOutput = ({ data, style, config }) => {
  if (!data || !data.url) return '';
  if (!style || typeof style !== 'object') style = {};

  supportedStyles.forEach(customStyle => {
    if (!style[customStyle] || typeof style[customStyle] !== 'object') style[customStyle] = {};
  });

  const videoStyle = config.disableDefaultStyle ? style.video : { ...videoOutputStyle.videoStyle, ...style.video };
  videoStyle.width = data.stretched ? '100%' : '';

  const figureStyle = config.disableDefaultStyle ? style.figure : { ...videoOutputStyle.figureStyle, ...style.figure };

  if (!data.withBorder) figureStyle.border = 'none';
  if (!data.withBackground) figureStyle.backgroundColor = 'none';

  const figcaptionStyle = config.disableDefaultStyle ? style.figcaption : { ...videoOutputStyle.figcaptionStyle, ...style.figcaption };

  return (
    <figure style={ figureStyle }>
      <video style={ videoStyle } autoPlay={ data.autoPlay } muted={ data.muted } controls={ data.controls }>
        <source src={ data.url } />
      </video>
      { data.caption && <figcaption style={ figcaptionStyle }>{ ReactHtmlParser(data.caption) }</figcaption> }
    </figure>
  );
};

export default VideoOutput;
