/** LinkToolOutput
  *
  * @version 1.0.0
  * @created - 2022.05.19
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2022.08.14 - image metadata is optional
  * @version 1.1.2 - 2022.11.26 - Redefine types
  *
  */

//#region imports
import parse from 'html-react-parser';
import type { LinkToolOutputProps } from '../err';
import type { CSSProperties } from 'react';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const supportedKeys = ['container', 'textHolder', 'title', 'description', 'image', 'siteName'];

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
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: 0,
    cursor: 'pointer'
  },
  description: {
    textAlign: 'left',
    lineHeight: '1.7',
    fontWeight: 200,
    fontSize: '15px',
    cursor: 'pointer'
  },
  image: {
    width: '15%',
    borderRadius: '4px',
    cursor: 'pointer',
    flexGrow: 1
  },
  siteName: {
    color: 'grey',
    cursor: 'pointer',
    margin: 0,
    fontSize: '12px',
  },
};


/**********************************************     FUNCTIONS     ******************************************/

const LinkToolOutput = ({ data, style, classNames, config }: LinkToolOutputProps): JSX.Element => {
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
  const titleStyle = config.disableDefaultStyle ? style.title : { ...defaultStyle.title, ...style.title };
  const descriptionStyle = config.disableDefaultStyle ? style.description : { ...defaultStyle.description, ...style.description };
  const siteNameStyle = config.disableDefaultStyle ? style.siteName : { ...defaultStyle.siteName, ...style.siteName };
  const imageStyle = config.disableDefaultStyle ? style.image : { ...defaultStyle.image, ...style.image };

  const handleClick = () => {
    let win = window.open(data.link, '_blank');
    win?.focus();
  };

  return (
    <div style={ containerStyle } className={ classNames.container } onClick={ handleClick }>
      <div style={ textHolderStyle } className={ classNames.textHolder }>
        { data.meta?.title && <p style={ titleStyle } className={ classNames.title }>{ parse(data.meta?.title) }</p> }
        { data.meta?.description && <p style={ descriptionStyle } className={ classNames.description }>{ parse(data.meta?.description) }</p> }
        { data.meta?.site_name && <p style={ siteNameStyle } className={ classNames.siteName }>{ parse(data.meta?.site_name) }</p> }
      </div>
      { data.meta?.image?.url && <img src={ data.meta?.image?.url } alt='image of link' style={ imageStyle } className={ classNames.image } /> }
    </div>
  );
};

export default LinkToolOutput;
