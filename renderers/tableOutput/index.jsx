/** TableOutput
	*
	* @version 1.0.0
	* @created - 2019.11.02
	* @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://portfolio.bomdi.now.sh)
	*/

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import tableOutputStyle from './tableOutputStyle';
//#endregion

const supportedStyles = ['table', 'tr', 'th', 'td'];

const TableOutput = (data, style) => {
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
			<tr style={{ ...style.tr }}>{ columnNames.map(columnName => <th style={{ ...tableOutputStyle.th, ...style.th }}>{ ReactHtmlParser(columnName) }</th>) }</tr>
		</thead>
		<tbody>
			{
				content.map((row, index) => (
					<tr style={{ backgroundColor: index % 2 === 0 ? 'white' : '#fbfbfb', ...style.tr }}>
						{
							Array.isArray(row) && row.length > 1 &&
							row.map(columnValue => <td style={{ ...tableOutputStyle.td, ...style.td }}>{ ReactHtmlParser(columnValue) }</td>)
						}
					</tr>
				))
			}
		</tbody>
	</table>;
};

export default TableOutput;
