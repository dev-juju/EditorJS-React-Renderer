/** ListOutput
	*
	* @version 1.0.0
	* @created - 2019.08.20
	* @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://portfolio.bomdi.now.sh)
	*/

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import listOutputStyle from './listOutputStyle';
//#endregion

const validListStyles = ['ordered', 'unordered'];

const ListOutput = (data, style) => {
	if (!data) return '';
	if (!style || typeof style !== 'object') style = {};

	const listStyle = { ...listOutputStyle, ...style };
	let content = [], listType = 'unordered';

	if (typeof data === 'string') content.push(data);
	else if (typeof data === 'object') {
		if (data.items && Array.isArray(data.items)) content = data.items.map((item, index) => <li key={ index }>{ ReactHtmlParser(item) }</li>);
		if (data.style && validListStyles.includes(data.style)) listType = data.style;
	}

	if (content.length <= 0) return '';
	if (listType === 'ordered') return <ol style={ listStyle }>{ content }</ol>;

	return <ul style={ listStyle }>{ content }</ul>;
};

export default ListOutput;
