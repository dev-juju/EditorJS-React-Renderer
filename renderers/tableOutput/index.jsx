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
  */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import tableOutputStyle from './tableOutputStyle';
//#endregion

const supportedStyles = ['table', 'tr', 'th', 'td'];

const TableOutput = ({ data, style, config }) => {
  if (!data) return '';
  if (!style || typeof style !== 'object') style = {};

  supportedStyles.forEach(customStyle => {
    if (!style[customStyle] || typeof style[customStyle] !== 'object') style[customStyle] = {};
  });

  const tableStyle = config && config.disableDefaultStyle ? style.table : { ...tableOutputStyle.table, ...style.table };
  const trStyle = config && config.disableDefaultStyle ? style.tr : { ...tableOutputStyle.tr, ...style.tr };
  const thStyle = config && config.disableDefaultStyle ? style.th : { ...tableOutputStyle.th, ...style.th };
  const tdStyle = config && config.disableDefaultStyle ? style.td : { ...tableOutputStyle.td, ...style.td };

  let content = data.content || [];
  if (!Array.isArray(content) || content.length < 1) return '';

  const columnNames = content.shift();

  return <table style={ tableStyle }>
    <thead>
      <tr style={ trStyle }>
        { columnNames.map((columnName, index) => <th key={ index } style={ thStyle }>{ ReactHtmlParser(columnName) }</th>) }
      </tr>
    </thead>
    <tbody>
      {
        content.map((row, index) => (
          <tr key={ index } style={ config && config.disableDefaultStyle ? trStyle : { backgroundColor: index % 2 === 0 ? 'white' : '#f9f9f9', ...trStyle }}>
            {
              Array.isArray(row) && row.length > 1 &&
              row.map((columnValue, i) => <td key={ i } style={ tdStyle }>{ ReactHtmlParser(columnValue) }</td>)
            }
          </tr>
        ))
      }
    </tbody>
  </table>;
};

export default TableOutput;
