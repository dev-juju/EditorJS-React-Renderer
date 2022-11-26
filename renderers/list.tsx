/** ListOutput
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
import type { ListOutputProps } from '../err';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const validListStyles = ['ordered', 'unordered'];
const supportedKeys = ['container', 'listItem'];

const defaultStyle: {[key: string]: CSSProperties} = {
  container: {
    margin: '5px 0',
  },
};


/**********************************************     FUNCTIONS     ******************************************/

const ListOutput = ({ data, style, classNames, config }: ListOutputProps): JSX.Element => {
  if (!data || !data.items || !Array.isArray(data.items)) return <></>;
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const containerStyle = config.disableDefaultStyle ? style.container : { ...defaultStyle.container, ...style.container };
  const listItemStyle = config.disableDefaultStyle ? style.listItem : { ...defaultStyle.listItem, ...style.listItem };

  const listType = validListStyles.includes(data.style) ? data.style : 'unordered';
  const content = data.items.map((item, index) => <li key={ index } style={ listItemStyle } className={ classNames.listItem }>{ parse(item) }</li>);

  if (content.length <= 0) return <></>;
  if (listType === 'ordered') return <ol style={ containerStyle } className={ classNames.container }>{ content }</ol>;

  return <ul style={ containerStyle } className={ classNames.container }>{ content }</ul>;
};

export default ListOutput;
