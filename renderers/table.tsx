/** TableOutput
  *
  * @version 1.0.0
  * @created - 2019.11.02
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component
  * @version 1.0.2 - 2020.05.21 - Add key to list items
  * @version 1.0.3 - 2020.07.17 - Add config parameter
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.1.2 - 2022.11.26 - Redefine types
  */

//#region imports
import { CSSProperties } from 'react';
import parse from 'html-react-parser';
import { TableOutputProps } from '../err';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const supportedKeys = ['table', 'tr', 'th', 'td'];

const defaultStyle: {[key: string]: CSSProperties} = {
  table: {
    borderSpacing: '1px 2px',
    margin: '5px 0',
  },
  th: {
    minWidth: '100px',
    padding: '8px 15px',
    borderRadius: '2px',
    backgroundColor: 'lightcoral',
  },
  td: {
    minWidth: '100px',
    padding: '8px 15px',
    borderRadius: '2px',
    textAlign: 'left',
  },
};


/**********************************************     FUNCTIONS     ******************************************/

const TableOutput = ({ data, style, classNames, config }: TableOutputProps): JSX.Element => {
  if (!data || !data.content || !Array.isArray(data.content)) return <></>;
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const tableStyle = config.disableDefaultStyle ? style.table : { ...defaultStyle.table, ...style.table };
  const trStyle = config.disableDefaultStyle ? style.tr : { ...defaultStyle.tr, ...style.tr };
  const thStyle = config.disableDefaultStyle ? style.th : { ...defaultStyle.th, ...style.th };
  const tdStyle = config.disableDefaultStyle ? style.td : { ...defaultStyle.td, ...style.td };

  const columnNames = data.content.shift();

  return (
    <table style={ tableStyle } className={ classNames.table }>
      <thead>
        <tr style={ trStyle } className={ classNames.tr }>
          { columnNames.map((columnName, index) => <th key={ index } style={ thStyle } className={ classNames.th }>{ parse(columnName) }</th>) }
        </tr>
      </thead>
      <tbody>
        {
          data.content.map((row, index) => (
            <tr key={ index } style={ config.disableDefaultStyle ? trStyle : { backgroundColor: index % 2 === 0 ? 'white' : '#f9f9f9', ...trStyle }} className={ classNames.tr }>
              {
                Array.isArray(row) && row.length > 1 &&
                row.map((columnValue, i) => <td key={ i } style={ tdStyle } className={ classNames.td }>{ parse(columnValue) }</td>)
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default TableOutput;
