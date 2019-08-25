/** RawOutput
 * 
 * @version 1.0.0
 * @created - 2019.08.20
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://portfolio.bomdi.now.sh)
 */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import rawOutputStyle from './rawOutputStyle';
//#endregion

const RawOutput = (data, style) => {
	if (!data) return '';
	if (!style || typeof style !== 'object') style = {};

	const rawStyle = { ...rawOutputStyle, ...style };
	let content = null;

	if (typeof data === 'string') content = data;
	else if (typeof data === 'object' && data.html && typeof data.html === 'string') content = data.html;

	return content ? ReactHtmlParser(content) : '';
};

export default RawOutput;
