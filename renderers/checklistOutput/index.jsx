/** ChecklistOutput
	*
	* @version 1.0.0
	* @created - 2019.08.20
	* @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://portfolio.bomdi.now.sh)
	*/

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import checklistOutputStyle from './checklistOutputStyle';
//#endregion

const ChecklistOutput = (data, style) => {
	if (!data) return '';
	if (!style || typeof style !== 'object') style = {};
return '';
	// const listStyle = { ...checklistOutputStyle, ...style };
	// let content = data.items || [];

	// if (!Array.isArray(content) || content.length < 1) return '';

	// let output = `<div style="display: flex; justify-content: flex-start; align-items: center; "></div>`;

	// content.forEach(item => {

	// });
	// if (typeof data === 'object') {
	// 	if (data.items && Array.isArray(data.items)) content = data.items.map((item, index) => <li key={ index }>{ ReactHtmlParser(item) }</li>);
	// 	if (data.style && validListStyles.includes(data.style)) listType = data.style;
	// }

	// if (content.length <= 0) return '';
	// if (listType === 'ordered') return <ol style={ listStyle }>{ content }</ol>;

	// return <ul style={ listStyle }>{ content }</ul>;
};

export default ChecklistOutput;
