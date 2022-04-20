/** ChecklistOutput
  *
  * @version 1.0.0
  * @created - 2020.05.25
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter - Adombang Munang Mbomndih
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter - Adombang Munang Mbomndih
  */

//#region imports
import React from 'react';
import parse from 'html-react-parser';
import classnames from 'classnames';
import checklistOutputStyle from './style';
import './style.css';
//#endregion

const supportedKeys = ['container', 'item', 'checkbox', 'label'];

const ChecklistOutput = ({ data, style, classNames, config }: ErrRendererProps) => {
  if (!data || !data.items || !Array.isArray(data.items) || data.items.length < 1) return '';
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const containerStyle = config.disableDefaultStyle ? style.container : { ...checklistOutputStyle.container, ...style.container };
  const itemStyle = config.disableDefaultStyle ? style.item : { ...checklistOutputStyle.item, ...style.item };
  const checkboxStyle = config.disableDefaultStyle ? style.checkbox : { ...checklistOutputStyle.checkbox, ...style.checkbox };
  const labelStyle = config.disableDefaultStyle ? style.label : { ...checklistOutputStyle.label, ...style.label };

  let content = [];

  if (typeof data === 'object') {
    if (data.items && Array.isArray(data.items)) content = data.items.map((item, index) =>
      <div key={ index } style={ itemStyle } className={ classNames.item }>
        <input id={ index } style={ checkboxStyle } className={ classNames.checkbox } type='checkbox' checked={ item.checked } />
        <label for={ index } style={ labelStyle } className={ classNames.label }>{ parse(item.text) }</label>
      </div>
    );
  }

  if (content.length <= 0) return '';

  return <ul style={ containerStyle } className={ classnames('checklistUL', classNames.container) }>{ content }</ul>;
};

export default ChecklistOutput;
