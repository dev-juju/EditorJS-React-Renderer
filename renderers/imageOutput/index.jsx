/** ImageOutput
	*
	* @version 1.0.0
	* @created - 2019.08.20
	* @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://portfolio.bomdi.now.sh)
	*/

//#region imports
import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import imageOutputStyle from './imageOutputStyle';
//#endregion

const supportedStyles = ['img', 'figure', 'figcaption'];

const ImageOutput = (data, style) => {
	if (!data || !data.file || !data.file.url) return '';
	if (!style || typeof style !== 'object') style = {};

	supportedStyles.forEach(customStyle => {
		if (!style[customStyle] || typeof style[customStyle] !== 'object') style[customStyle] = {};
	});

	const imageStyle = {
		...imageOutputStyle.imageStyle,
		width: data.stretched ? '100%' : '',
		...style.img
	};
	const figureStyle = {
		...imageOutputStyle.figureStyle,
		border: data.withBorder ? '1px solid #eee' : 'none',
		// backgroundColor: data.withBackground ? 'aliceblue' : 'none',
		...style.figure
	};
	const figcaptionStyle = {
		...imageOutputStyle.figcaptionStyle,
		...style.figcaption
	};

	return (
		<figure style={ figureStyle }>
			<img src={ data.file.url } alt={ data.caption || '' } style={ imageStyle } />
			{ data.caption && <figcaption style={ figcaptionStyle }>{ ReactHtmlParser(data.caption) }</figcaption> }
		</figure>
	);
};

export default ImageOutput;
