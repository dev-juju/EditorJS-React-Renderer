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
  */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import tableOutputStyle from './tableOutputStyle';
//#endregion

const supportedStyles = ['table', 'tr', 'th', 'td'];

const TableOutput = ({ data, style }) => {
  if (!data) return '';
  if (!style || typeof style !== 'object') style = {};

  supportedStyles.forEach(customStyle => {
    if (!style[customStyle] || typeof style[customStyle] !== 'object') style[customStyle] = {};
  });

  let content = data.content || [];
  if (!Array.isArray(content) || content.length < 1) return '';

  const columnNames = content.shift();

  return <table style={{ ...tableOutputStyle.table, ...style.table }}>
    <thead>
      <tr style={{ ...style.tr }}>
        {
          columnNames.map((columnName, index) =>
            <th key={ index } style={{ ...tableOutputStyle.th, ...style.th }}>{ ReactHtmlParser(columnName) }</th>)
        }
      </tr>
    </thead>
    <tbody>
      {
        content.map((row, index) => (
          <tr key={ index } style={{ backgroundColor: index % 2 === 0 ? 'white' : '#f9f9f9', ...style.tr }}>
            {
              Array.isArray(row) && row.length > 1 &&
              row.map((columnValue, i) => <td key={ i } style={{ ...tableOutputStyle.td, ...style.td }}>{ ReactHtmlParser(columnValue) }</td>)
            }
          </tr>
        ))
      }
    </tbody>
  </table>;
};

export default TableOutput;
