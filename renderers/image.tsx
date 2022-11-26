/** ImageOutput
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component
  * @version 1.0.2 - 2020.05.21 - Codex width overrides user defined width
  * @version 1.0.3 - 2020.07.17 - Add config parameter
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.1.2 - 2022.11.26 - Redefine types
  */

//#region imports
import parse from 'html-react-parser';
import type { ImageOutputProps } from '../err';
import type { CSSProperties } from 'react';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const supportedKeys = ['img', 'figure', 'figcaption'];

const defaultStyle: {[key: string]: CSSProperties} = {
  image: {
    maxWidth: '100%',
    maxHeight: '400px',
  },
  figure: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '400px',
    overflow: 'hidden',
    backgroundColor: 'aliceblue',
    border: '1px solid #eee'
  },
  figcaption: {
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

const ImageOutput = ({ data, style, classNames, config }: ImageOutputProps): JSX.Element => {
  if (!data || !data.file || !data.file.url) return <></>;
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const imageStyle = config.disableDefaultStyle ? style.img : { ...defaultStyle.image, ...style.img };
  imageStyle['width'] = data.stretched ? '100%' : '';

  const figureStyle = config.disableDefaultStyle ? style.figure : { ...defaultStyle.figure, ...style.figure };
  if (!data.withBorder) figureStyle['border'] = 'none';
  if (!data.withBackground) figureStyle['backgroundColor'] = 'none';

  const figcaptionStyle = config.disableDefaultStyle ? style.figcaption : { ...defaultStyle.figcaption, ...style.figcaption };

  return (
    <figure style={ figureStyle } className={ classNames.figure }>
      <img src={ data.file.url } alt={ data.caption || '' } style={ imageStyle } className={ classNames.img } />
      { data.caption && <figcaption style={ figcaptionStyle } className={ classNames.figcaption }>{ parse(data.caption) }</figcaption> }
    </figure>
  );
};

export default ImageOutput;
