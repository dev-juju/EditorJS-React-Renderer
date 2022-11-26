/** WarningOutput
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
import parse from 'html-react-parser';
import type { CSSProperties } from 'react';
import { WarningOutputProps, WarningProps } from '../err';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const supportedKeys = ['container', 'icon', 'title', 'message'];

const defaultStyle: {[key: string]: CSSProperties} = {
  container: {
    width: '100%',
    margin: '20px 8px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  icon: {
    width: '30px',
    enableBackground: 'new 0 0 50 50',
  } as any,
  title: {
    fontWeight: 400,
    textTransform: 'uppercase',
    margin: 0,
    marginRight: '15px',
    marginLeft: '5px',
    fontSize: '90%',
  },
  message: {
    color: 'goldenrod',
    textAlign: 'left',
    fontSize: '90%',
    margin: 0,
  },
  circle: {
    fill: '#EFCE4A'
  },
  line: {
    fill: 'none',
    stroke: '#FFFFFF',
    strokeWidth: 5,
    strokeLinecap: 'round',
    strokeMiterlimit: 10
  }
};


/**********************************************     FUNCTIONS     ******************************************/

const Warning = ({ title, message, classNames, style={}, config }: WarningProps) => {
  const containerStyle = config.disableDefaultStyle ? style.container : { ...defaultStyle.container, ...style.container };
  const iconStyle = config.disableDefaultStyle ? style.icon : { ...defaultStyle.icon, ...style.icon };
  const titleStyle = config.disableDefaultStyle ? style.title : { ...defaultStyle.title, ...style.title };
  const messageStyle = config.disableDefaultStyle ? style.message : { ...defaultStyle.message, ...style.message };

  return (
    <div style={ containerStyle } className={ classNames.container }>
      <svg style={ iconStyle } className={ classNames.icon } version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px' y='0px' viewBox='0 0 50 50' xmlSpace='preserve'>
        <circle style={ defaultStyle.circle } cx='25' cy='25' r='25'/>
        <line style={ defaultStyle.line } x1='25' y1='10' x2='25' y2='28'/>
        <line style={ defaultStyle.line } x1='25' y1='37' x2='25' y2='39'/>
        <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
      </svg>
      <p style={ titleStyle } className={ classNames.title }>{ title }:</p>
      <p style={ messageStyle } className={ classNames.message }>{ message }</p>
    </div>
  );
};

const WarningOutput = ({ data, style, classNames, config }: WarningOutputProps): JSX.Element => {
  if (!data || !data.message || typeof data.message != 'string') return <></>;
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  return <Warning title={ parse(data.title || 'Warning') as string } message={ parse(data.message) as string }
    style={ style } config={ config } classNames={ classNames } />;
};

export default WarningOutput;
