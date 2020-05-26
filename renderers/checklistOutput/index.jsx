/** ChecklistOutput
  *
  * @version 1.0.0
  * @created - 2020.05.25
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import checklistOutputStyle from './checklistOutputStyle';
import checklistStyle from './style.css';
//#endregion

const supportedStyles = ['container', 'item', 'checkbox', 'label'];

const ChecklistOutput = ({ data, style }) => {
  if (!data || !data.items || !Array.isArray(data.items) || data.items.length < 1) return '';
  if (!style || typeof style !== 'object') style = {};

  supportedStyles.forEach(customStyle => {
    if (!style[customStyle] || typeof style[customStyle] !== 'object') style[customStyle] = {};
  });

  const containerStyle = {
    ...checklistOutputStyle.container,
    ...style.container,
  };
  const itemStyle = {
    ...checklistOutputStyle.item,
    ...style.item,
  };
  const checkboxStyle = {
    ...checklistOutputStyle.checkbox,
    ...style.checkbox,
  };
  const labelStyle = {
    ...checklistOutputStyle.label,
    ...style.label,
  };

  let content = [];

  if (typeof data === 'object') {
    if (data.items && Array.isArray(data.items)) content = data.items.map((item, index) =>
      <div key={ index } style={ itemStyle }>
        <input id={ index } style={ checkboxStyle } type='checkbox' checked={ item.checked } />
        <label for={ index } style={ labelStyle }>{ ReactHtmlParser(item.text) }</label>
      </div>
    );
  }

  if (content.length <= 0) return '';

  return <ul style={ containerStyle } className='checklistUL'>{ content }</ul>;
};

export default ChecklistOutput;
