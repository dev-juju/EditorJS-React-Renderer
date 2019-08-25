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
import HeaderOutput from './renderers/headerOutput/index.jsx';
import ParagraphOutput from './renderers/paragraphOutput/index.jsx';
import ImageOutput from './renderers/imageOutput/index.jsx';
import ListOutput from './renderers/listOutput/index.jsx';
import QuoteOutput from './renderers/quoteOutput/index.jsx';
import WarningOutput from './renderers/warningOutput/index.jsx';
// import RawOutput from './renderers/rawOutput/index.jsx';
//#endregion

const Output = (editorData, style) => {
	if (!editorData || typeof editorData !== 'object') return '';
	if (!style || typeof style !== 'object') style = {};

	return editorData.blocks.map(block => {
		switch (block.type) {
			case 'header': return HeaderOutput(block.data, style.header || {});
			case 'paragraph': return ParagraphOutput(block.data, style.paragraph || {});
			case 'quote': return QuoteOutput(block.data, style.quote || {});
			case 'list': return ListOutput(block.data, style.list || {});
			// case 'raw': return RawOutput(block.data, style.raw || {});
			case 'image': return ImageOutput(block.data, style.image || {});
			case 'warning': return WarningOutput(block.data, style.warning || {});
		
			default: return '';
		}
	});
};

export {
	HeaderOutput, ParagraphOutput, ImageOutput, 
	ListOutput, QuoteOutput, WarningOutput,
	Output as default
};
