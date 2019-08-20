/** EditorJS-React Renderer
 * 
 * A small library that provides functions to parse and render data saved by 
 * EditorJS into react components
 * 
 * @version 1.0.0
 * @created - 2019.08.20
 * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://portfolio.bomdi.now.sh)
 */

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Warning from './components/warning/index.jsx';
import Quote from './components/quote/index.jsx';
//#endregion

const Output = (editorData, style) => {
	if (!editorData || typeof editorData !== 'object') return '';
	if (!style || typeof style !== 'object') style = {};

	return editorData.blocks.map(block => {
		switch (block.type) {
			case 'header': return headerOutput(block.data, style.header || {});
			case 'paragraph': return paragraphOutput(block.data, style.paragraph || {});
			case 'quote': return quoteOutput(block.data, style.quote || {});
			case 'list': return listOutput(block.data, style.list || {});
			// case 'raw': return rawOutput(block.data, style.raw || {});
			case 'image': return imageOutput(block.data, style.image || {});
			case 'warning': return warningOutput(block.data, style.warning || {});
		
			default: return '';
		}
	});
};

export const headerOutput = (data, style) => {
	if (!data) return '';
	if (!style || typeof style !== 'object') style = {};

	const headerStyle = { 
		margin: '8px 0',
		marginTop: '15px',
		...style 
	};
	let content = null;

	if (typeof data === 'string') content = data;
	else if (typeof data === 'object' && data.text && typeof data.text === 'string') content = data.text;
	
	if (!content) return '';
console.log(content);
	if (typeof data === 'object' && data.level && typeof data.level === 'number') {
		switch (data.level) {
			case 1: return <h1 style={ headerStyle }>{ ReactHtmlParser(content) }</h1>;
			case 2: return <h2 style={ headerStyle }>{ ReactHtmlParser(content) }</h2>;
			case 3: return <h3 style={ headerStyle }>{ ReactHtmlParser(content) }</h3>;
			case 4: return <h4 style={ headerStyle }>{ ReactHtmlParser(content) }</h4>;
			case 5: return <h5 style={ headerStyle }>{ ReactHtmlParser(content) }</h5>;
			case 6: return <h6 style={ headerStyle }>{ ReactHtmlParser(content) }</h6>;
			default: return <h4 style={ headerStyle }>{ ReactHtmlParser(content) }</h4>;
		}
	}
	else return <h4 style={ headerStyle }>{ ReactHtmlParser(content) }</h4>;
};

export const paragraphOutput = (data, style) => {
	if (!data) return '';
	if (!style || typeof style !== 'object') style = {};

	const paragraphStyle = { 
		margin: '5px 0', 
		...style 
	};
	let content = null;

	if (typeof data === 'string') content = data;
	else if (typeof data === 'object' && data.text && typeof data.text === 'string') content = data.text;

	return content ? <p style={ paragraphStyle }>{ ReactHtmlParser(content) }</p> : '';
};

export const quoteOutput = (data, style) => {
	if (!data) return '';
	if (!style || typeof style !== 'object') style = {};

	const quoteStyle = { 
		margin: '5px 0', 
		...style 
	};
	let content = null;
	let caption = 'Unknown';
	// let textAlign = 'left';

	if (typeof data === 'string') content = data;
	else if (typeof data === 'object' && data.text && typeof data.text === 'string') {
		content = data.text;
		if (data.caption && typeof data.caption === 'string') caption = data.caption;
		// if (data.alignment && typeof data.alignment === 'string') textAlign = data.alignment;
	}

	if (!content) return '';
	return <Quote author={ ReactHtmlParser(caption) } message={ ReactHtmlParser(content) } customStyle={ quoteStyle } />;
};

export const imageOutput = (data, style) => {
	if (!data || !data.file || !data.file.url) return '';
	if (!style || typeof style !== 'object') style = {};

	const imageStyle = {
		maxWidth: '100%',
		maxHeight: '400px',
		width: data.stretched ? '100%' : '',
		...style
	};
	const figureStyle = { 
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '20px 0', 
		width: '100%',
		maxWidth: '100%',
		maxHeight: '400px',
		overflow: 'hidden',
		border: data.withBorder ? '1px solid #eee' : 'none',
		// backgroundColor: data.withBackground ? 'aliceblue' : 'none',
		backgroundColor: 'aliceblue',
	};
	const figcaptionStyle = { 
		position: 'absolute',
		top: '8px',
		right: '8px',
		padding: '10px',
		fontSize: '12px',
		backgroundColor: '#2d333a',
		color: 'white',
		borderRadius: '50px',
		cursor: 'default'
	};

	return (
		<figure style={ figureStyle }>
			<img src={ data.file.url } alt={ data.caption || '' } style={ imageStyle } />
			{ data.caption && <figcaption style={ figcaptionStyle }>{ ReactHtmlParser(data.caption) }</figcaption> }
		</figure>
	); 
};

// export const rawOutput = (data, style) => {
// 	if (!data) return '';
// 	if (!style || typeof style !== 'object') style = {};

// 	const rawStyle = { 
// 		width: '100%',
// 		margin: '5px 0', 
// 		...style 
// 	};
// 	let content = null;

// 	if (typeof data === 'string') content = data;
// 	else if (typeof data === 'object' && data.html && typeof data.html === 'string') content = data.html;

// 	return content ? ReactHtmlParser(content) : '';
// };

export const listOutput = (data, style) => {
	if (!data) return '';
	if (!style || typeof style !== 'object') style = {};

	const listStyle = { 
		margin: '5px 0', 
		...style 
	};
	const validListStyles = ['ordered', 'unordered'];
	let content = [], listType = 'unordered';

	if (typeof data === 'string') content.push(data);
	else if (typeof data === 'object') {
		if (data.items && Array.isArray(data.items)) 
			content = data.items.map((item, index) => <li key={ index }>{ ReactHtmlParser(item) }</li>);

		if (data.style && validListStyles.includes(data.style)) listType = data.style;
	}

	if (content.length <= 0) return '';
	if (listType === 'ordered') return <ol style={ listStyle }>{ content }</ol>;
	return <ul style={ listStyle }>{ content }</ul>;
};

export const warningOutput = (data, style) => {
	if (!data) return '';
	if (!style || typeof style !== 'object') style = {};

	let message = null, title = 'Warning';

	if (typeof data === 'string') message = data;
	else if (typeof data === 'object') {
		if (data.message && typeof data.message === 'string') message = data.message;
		if (data.title && typeof data.title === 'string') title = data.title;
	}

	if (!message) return '';
	return <Warning title={ ReactHtmlParser(title) } message={ ReactHtmlParser(message) } customStyle={ style } />;
};

export default Output;
