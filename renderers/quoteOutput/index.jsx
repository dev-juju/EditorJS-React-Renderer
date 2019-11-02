/** QuoteOutput
	*
	* @version 1.0.0
	* @created - 2019.08.20
	* @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://portfolio.bomdi.now.sh)
	*/

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Quote from './quote/index.jsx';
//#endregion

const QuoteOutput = (data, style) => {
	if (!data) return '';
	if (!style || typeof style !== 'object') style = {};

	let content = null;
	let caption = 'Unknown';

	if (typeof data === 'string') content = data;
	else if (typeof data === 'object' && data.text && typeof data.text === 'string') {
		content = data.text;
		if (data.caption && typeof data.caption === 'string') caption = data.caption;
		if (data.alignment && typeof data.alignment === 'string') style.textAlign = data.alignment;
	}

	if (!content) return '';
	return <Quote author={ ReactHtmlParser(caption) } message={ ReactHtmlParser(content) } customStyle={ style } />;
};

export default QuoteOutput;
