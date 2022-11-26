/** PersonalityOutput
  *
  * @version 1.0.0
  * @created - 2022.05.19
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2022.11.26 - Redefine types
  *
  */

//#region imports
import parse from 'html-react-parser';
import type { CSSProperties } from 'react';
import type { PersonalityOutputProps } from '../err';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const supportedKeys = ['container', 'textHolder', 'name', 'description', 'photo', 'link'];

const defaultStyle: {[key: string]: CSSProperties} = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    minWidth: '280px',
    flexWrap: 'wrap-reverse',
    border: '1px solid #eee',
    boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  textHolder: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '80%',
    padding: '12px 20px'
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: 0
  },
  description: {
    textAlign: 'left',
    lineHeight: '1.7',
    cursor: 'pointer',
    fontWeight: 200,
    fontSize: '15px'
  },
  photo: {
    width: '15%',
    borderRadius: '4px',
    flexGrow: 1
  },
  link: {
    textDecoration: 'none',
    color: '#42A5F5',
    cursor: 'pointer',
    fontSize: '12px'
  },
};


/**********************************************     FUNCTIONS     ******************************************/

const PersonalityOutput = ({ data, style, classNames, config }: PersonalityOutputProps): JSX.Element => {
  if (!data || !data.link) return <></>;
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const containerStyle = config.disableDefaultStyle ? style.container : { ...defaultStyle.container, ...style.container };
  const textHolderStyle = config.disableDefaultStyle ? style.textHolder : { ...defaultStyle.textHolder, ...style.textHolder };
  const nameStyle = config.disableDefaultStyle ? style.name : { ...defaultStyle.name, ...style.name };
  const descriptionStyle = config.disableDefaultStyle ? style.description : { ...defaultStyle.description, ...style.description };
  const linkStyle = config.disableDefaultStyle ? style.link : { ...defaultStyle.link, ...style.link };
  const photoStyle = config.disableDefaultStyle ? style.photo : { ...defaultStyle.photo, ...style.photo };

  const handleClick = () => {
    let win = window.open(data.link, '_blank');
    win?.focus();
  };

  return (
    <div style={ containerStyle } className={ classNames.container } onClick={ handleClick }>
      <div style={ textHolderStyle } className={ classNames.textHolder }>
        { data.name && <p style={ nameStyle } className={ classNames.name }>{ parse(data.name) }</p> }
        { data.description && <p style={ descriptionStyle } className={ classNames.description }>{ parse(data.description) }</p> }
        <a href={ data.link } style={ linkStyle } className={ classNames.link }>{ data.link }</a>
      </div>
      { data.photo && <img src={ data.photo } alt='image of person' style={ photoStyle } className={ classNames.photo } /> }
    </div>
  );
};

export default PersonalityOutput;
