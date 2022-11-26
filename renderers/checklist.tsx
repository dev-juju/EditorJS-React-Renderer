/** ChecklistOutput
  *
  * @version 1.0.0
  * @created - 2020.05.25
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.07.17 - Add config parameter
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.1.2 - 2022.04.20 - fix console errors (make input readOnly)
  * @version 1.1.3 - 2022.11.26 - Redefine types
  */

//#region imports
import parse from 'html-react-parser';
import type { CSSProperties } from 'react';
import type { ChecklistOutputProps } from '../err';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const supportedKeys = ['container', 'item', 'checkbox', 'label'];

const defaultStyle: {[key: string]: CSSProperties} = {
  container: {
    margin: '5px 0',
    padding: 0,
    listStyle: 'none',
    width: '100%',
    maxWidth: '320px',
  },
  item: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  checkbox: {
    height: '17px',
    width: '17px',
    outline: 'none',
    display: 'inline-block',
    verticalAlign: 'top',
    position: 'relative',
    margin: 0,
    marginRight: '5px',
    cursor: 'pointer',
    border: '1px solid var(--bc, var(--border))',
    background: 'var(--b, var(--background))',
    transition: 'background .3s, border-color .3s, box-shadow .2s',
  },
  label: {
    fontSize: '14px',
    lineHeight: '21px',
    display: 'inline-block',
    verticalAlign: 'top',
    cursor: 'pointer',
    marginLeft: '4px',
  },
};


/**********************************************     FUNCTIONS     ******************************************/

const ChecklistOutput = ({ data, style, classNames, config }: ChecklistOutputProps): JSX.Element => {
  if (!data || !data.items || !Array.isArray(data.items) || data.items.length < 1) return <></>;
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const containerStyle = config.disableDefaultStyle ? style.container : { ...defaultStyle.container, ...style.container };
  const itemStyle = config.disableDefaultStyle ? style.item : { ...defaultStyle.item, ...style.item };
  const checkboxStyle = config.disableDefaultStyle ? style.checkbox : { ...defaultStyle.checkbox, ...style.checkbox };
  const labelStyle = config.disableDefaultStyle ? style.label : { ...defaultStyle.label, ...style.label };

  const content = data.items.map((item, index) =>
    <div key={ index } style={ itemStyle } className={ classNames.item }>
      <input id={ index.toString() } style={ checkboxStyle } className={ classNames.checkbox } type='checkbox' checked={ item.checked } readOnly />
      <label htmlFor={ index.toString() } style={ labelStyle } className={ classNames.label }>{ parse(item.text) }</label>
    </div>
  );

  return <ul style={ containerStyle } className={ classNames.container }>{ content }</ul>;
};

export default ChecklistOutput;
