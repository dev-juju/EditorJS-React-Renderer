/** VideoOutput
  *
  * @version 1.0.0
  * @created - 2020.09.28
  * @author - Tomáš Hylský <thylsky@gmail.com> (https://linktr.ee/thylsky)
  *
  * Version History
  * ---------------
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.1.2 - 2022.11.26 - Redefine types
  */

//#region imports
import parse from 'html-react-parser';
import type { CSSProperties } from 'react';
import type { VideoOutputProps } from '../err';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const supportedKeys = ['video', 'figure', 'figcaption'];

const defaultStyle: {[key: string]: CSSProperties} = {
  videoStyle: {
    maxWidth: '100%',
  },
  figureStyle: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    backgroundColor: 'aliceblue',
    border: '1px solid #eee'
  },
  figcaptionStyle: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    padding: '5px 10px',
    fontSize: '12px',
    backgroundColor: '#2d333a',
    color: 'white',
    borderRadius: '2px',
    cursor: 'default',
  }
};


/**********************************************     FUNCTIONS     ******************************************/

const VideoOutput = ({ data, style, classNames, config }: VideoOutputProps): JSX.Element => {
  if (!data || !data.url) return <></>;
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const videoStyle = config.disableDefaultStyle ? style.video : { ...defaultStyle.videoStyle, ...style.video };
  videoStyle['width'] = data.stretched ? '100%' : '';

  const figureStyle = config.disableDefaultStyle ? style.figure : { ...defaultStyle.figureStyle, ...style.figure };

  if (!data.withBorder) figureStyle['border'] = 'none';
  if (!data.withBackground) figureStyle['backgroundColor'] = 'none';

  const figcaptionStyle = config.disableDefaultStyle ? style.figcaption : { ...defaultStyle.figcaptionStyle, ...style.figcaption };

  return (
    <figure style={ figureStyle } className={ classNames.figure }>
      <video style={ videoStyle } className={ classNames.video } autoPlay={ data.autoPlay } muted={ data.muted } controls={ data.controls }>
        <source src={ data.url } />
        Your browser does not support the video tag.
      </video>
      { data.caption && <figcaption style={ figcaptionStyle } className={ classNames.figcaption }>{ parse(data.caption) }</figcaption> }
    </figure>
  );
};

export default VideoOutput;
