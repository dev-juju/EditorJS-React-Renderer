/** DelimiterOutput
  *
  * @version 1.0.0
  * @created - 2019.11.30
  * @author - Tomáš Hylský <thylsky@gmail.com> (https://linktr.ee/thylsky)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component
  * @version 1.0.2 - 2020.02.13 - Use SVG stars as delimiter
  * @version 1.0.3 - 2020.07.17 - Add config parameter
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.1.2 - 2022.11.26 - Redefine types
 */

//#region imports
import React from 'react';
import type { CSSProperties } from 'react';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const supportedKeys = ['container', 'svg', 'path'];

const defaultStyle: {[key: string]: CSSProperties} = {
  container: {
    width: '100%',
    margin: '8px 0',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    enableBackground: 'new 0 0 100.353 100.353'
  } as any,
  svg: {
    width: '20px',
    height: '20px',
    margin: '5px',
  },
  path: {
    fill: '#231F20'
  }
};


/**********************************************       TYPES       ******************************************/

type DelimiterOutputClassNames = {
  container?: string
  svg?: string
  path?: string
}

type DelimiterOutputStyles = {
  container?: CSSProperties
  svg?: CSSProperties
  path?: CSSProperties
}

type DelimiterOutputProps = {
  style?: DelimiterOutputStyles
  classNames?: DelimiterOutputClassNames
  config?: ErrConfig
}


/**********************************************     FUNCTIONS     ******************************************/

const DelimiterOutput = ({ style, classNames, config }: DelimiterOutputProps): JSX.Element => {
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const containerStyle = config.disableDefaultStyle ? style.container : { ...defaultStyle.container, ...style.container };
  const svgStyle = config.disableDefaultStyle ? style.svg : { ...defaultStyle.svg, ...style.svg };
  const pathStyle = config.disableDefaultStyle ? style.path : { ...defaultStyle.path, ...style.path };

  return (
    <div style={ containerStyle } className={ classNames.container }>
      <svg style={ svgStyle } className={ classNames.svg } version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100.353 100.353' xmlSpace='preserve'>
      <path style={ pathStyle } className={ classNames.path } d='M98.544,48.543c-25.998,0-47.15-20.904-47.15-46.599c0-0.804-0.652-1.456-1.456-1.456
        s-1.456,0.652-1.456,1.456c0,25.698-21.096,46.605-47.025,46.605c-0.804,0-1.456,0.652-1.456,1.456c0,0.805,0.652,1.457,1.456,1.457
        c25.929,0,47.025,20.901,47.025,46.592c0,0.804,0.652,1.457,1.456,1.457s1.456-0.652,1.456-1.457
        c0-25.694,21.152-46.599,47.15-46.599c0.804,0,1.456-0.652,1.456-1.456C100,49.195,99.348,48.543,98.544,48.543z M49.94,86.169
        c-4.428-17.748-18.541-31.752-36.436-36.163c17.895-4.412,32.008-18.421,36.436-36.174C54.379,31.582,68.528,45.588,86.467,50
        C68.528,54.411,54.378,68.419,49.94,86.169z'/>
      </svg>
      <svg style={ svgStyle } className={ classNames.svg } version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100.353 100.353' xmlSpace='preserve'>
      <path style={ pathStyle } className={ classNames.path } d='M98.544,48.543c-25.998,0-47.15-20.904-47.15-46.599c0-0.804-0.652-1.456-1.456-1.456
        s-1.456,0.652-1.456,1.456c0,25.698-21.096,46.605-47.025,46.605c-0.804,0-1.456,0.652-1.456,1.456c0,0.805,0.652,1.457,1.456,1.457
        c25.929,0,47.025,20.901,47.025,46.592c0,0.804,0.652,1.457,1.456,1.457s1.456-0.652,1.456-1.457
        c0-25.694,21.152-46.599,47.15-46.599c0.804,0,1.456-0.652,1.456-1.456C100,49.195,99.348,48.543,98.544,48.543z M49.94,86.169
        c-4.428-17.748-18.541-31.752-36.436-36.163c17.895-4.412,32.008-18.421,36.436-36.174C54.379,31.582,68.528,45.588,86.467,50
        C68.528,54.411,54.378,68.419,49.94,86.169z'/>
      </svg>
      <svg style={ svgStyle } className={ classNames.svg } version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100.353 100.353' xmlSpace='preserve'>
      <path style={ pathStyle } className={ classNames.path } d='M98.544,48.543c-25.998,0-47.15-20.904-47.15-46.599c0-0.804-0.652-1.456-1.456-1.456
        s-1.456,0.652-1.456,1.456c0,25.698-21.096,46.605-47.025,46.605c-0.804,0-1.456,0.652-1.456,1.456c0,0.805,0.652,1.457,1.456,1.457
        c25.929,0,47.025,20.901,47.025,46.592c0,0.804,0.652,1.457,1.456,1.457s1.456-0.652,1.456-1.457
        c0-25.694,21.152-46.599,47.15-46.599c0.804,0,1.456-0.652,1.456-1.456C100,49.195,99.348,48.543,98.544,48.543z M49.94,86.169
        c-4.428-17.748-18.541-31.752-36.436-36.163c17.895-4.412,32.008-18.421,36.436-36.174C54.379,31.582,68.528,45.588,86.467,50
        C68.528,54.411,54.378,68.419,49.94,86.169z'/>
      </svg>
    </div>
  );
};

export default DelimiterOutput;
