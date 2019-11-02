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

const TableOutput = (data, style) => {
	if (!data) return '';
	if (!style || typeof style !== 'object') style = {};

	const listStyle = { ...tableOutputStyle, ...style };
	let content = data.content || [];

	if (!Array.isArray(content) || content.length < 1) return '';

	let table = `<table style={${ tableOutputStyle.table, listStyle }}><thead><tr>`;
	const columnNames = content[0];

	columnNames.forEach(columnName => table += `<th style={${ tableOutputStyle.th }}>${ columnName }</th>`);
	table += '</tr></thead><tbody>';

	for (let i = 1, len = content.length; i < len; i++) {
		const row = content[i];
		if (!Array.isArray(row) || row.length < 1) continue;

		let output = `<tr style={{ backgroundColor: ${ i % 2 === 0 ? 'white' : '#fdfdfd' } }}>`;

		row.forEach(columnValue => output += `<td style={${ tableOutputStyle.td }}>${ columnValue }</td>`);
		output += '</tr>';
		table += output;
	}
	table += '</tbody></table>';

	return ReactHtmlParser(table);
};

export default TableOutput;
