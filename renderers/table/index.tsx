/** TableOutput
  *
  * @version 1.0.0
  * @created - 2019.11.02
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component - Adombang Munang Mbomndih
  * @version 1.0.2 - 2020.05.21 - Add key to list items - Adombang Munang Mbomndih
  * @version 1.0.3 - 2020.07.17 - Add config parameter - Adombang Munang Mbomndih
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter - Adombang Munang Mbomndih
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter - Adombang Munang Mbomndih
  */

//#region imports
import React from 'react';
import parse from 'html-react-parser';
import tableOutputStyle from './style';
//#endregion

const supportedKeys = ['table', 'tr', 'th', 'td'];

const TableOutput = ({ data, style, classNames, config }: ErrRendererProps) => {
  if (!data) return '';
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const tableStyle = config.disableDefaultStyle ? style.table : { ...tableOutputStyle.table, ...style.table };
  const trStyle = config.disableDefaultStyle ? style.tr : { ...tableOutputStyle.tr, ...style.tr };
  const thStyle = config.disableDefaultStyle ? style.th : { ...tableOutputStyle.th, ...style.th };
  const tdStyle = config.disableDefaultStyle ? style.td : { ...tableOutputStyle.td, ...style.td };

  let content = data.content || [];
  if (!Array.isArray(content) || content.length < 1) return '';

  const columnNames = content.shift();

  return <table style={ tableStyle } className={ classNames.table }>
    <thead>
      <tr style={ trStyle } className={ classNames.tr }>
        { columnNames.map((columnName, index) => <th key={ index } style={ thStyle } className={ classNames.th }>{ parse(columnName) }</th>) }
      </tr>
    </thead>
    <tbody>
      {
        content.map((row, index) => (
          <tr key={ index } style={ config.disableDefaultStyle ? trStyle : { backgroundColor: index % 2 === 0 ? 'white' : '#f9f9f9', ...trStyle }} className={ classNames.tr }>
            {
              Array.isArray(row) && row.length > 1 &&
              row.map((columnValue, i) => <td key={ i } style={ tdStyle } className={ classNames.td }>{ parse(columnValue) }</td>)
            }
          </tr>
        ))
      }
    </tbody>
  </table>;
};

export default TableOutput;
