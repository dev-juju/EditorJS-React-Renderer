/** QuoteOutput
  *
  * @version 1.0.0
  * @created - 2019.08.20
  * @author - Adombang Munang Mbomndih (Bomdi) <dzedock@gmail.com> (https://bomdisoft.com)
  *
  * Version History
  * ---------------
  * @version 1.0.1 - 2020.02.12 - Covert to React component
  * @version 1.0.2 - 2020.07.17 - Add config parameter
  * @version 1.1.0 - 2021.04.11 - Add classNames parameter
  * @version 1.1.1 - 2021.04.12 - Add validation for config parameter
  * @version 1.1.3 - 2022.11.26 - Redefine types
  */

//#region imports
import React from 'react';
import type { CSSProperties } from 'react';
import parse from 'html-react-parser';
//#endregion

/**********************************************      GLOBALS      ******************************************/

const supportedKeys = ['container', 'content', 'author', 'message'];

const defaultStyle: {[key: string]: CSSProperties} = {
  quote: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '5px 0',
		textAlign: 'left',
	},
	content: {
		minWidth: '240px',
		width: '80%',
		margin: '5px 0',
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		border: '1px solid var(--primary-grey)',
		backgroundColor: 'var(--secondary-white)',
		borderRadius: 'var(--default-radius)',
	},
	author: {
		fontWeight: 'bold',
		margin: '0 5px 5px 5px',
	},
};


/**********************************************       TYPES       ******************************************/

type QuoteOutputData = {
  text: string
  caption?: string
  alignment?: string
}

type QuoteOutputClassNames = {
  container?: string
  content?: string
  author?: string
  message?: string
}

type QuoteOutputStyles = {
  container?: CSSProperties
  content?: CSSProperties
  author?: CSSProperties
  message?: CSSProperties
}

type QuoteOutputProps = {
  data: QuoteOutputData
  style?: QuoteOutputStyles
  classNames?: QuoteOutputClassNames
  config?: ErrConfig
}

type QuoteProps = {
  author?: string
  message: string
  style: QuoteOutputStyles
  classNames: QuoteOutputClassNames
  config: ErrConfig
}


/**********************************************     FUNCTIONS     ******************************************/

const Quote = ({ author='Unknown', message, config, classNames, style }: QuoteProps): JSX.Element => {
  const containerStyle = config.disableDefaultStyle ? defaultStyle.quote : { ...defaultStyle.quote, ...style.container };
  const contentStyle = config.disableDefaultStyle ? defaultStyle.contentStyle : { ...defaultStyle.contentStyle, ...style.content };
  const messageStyle = config.disableDefaultStyle ? defaultStyle.messageStyle : { ...defaultStyle.messageStyle, ...style.message };
  const authorStyle = config.disableDefaultStyle ? defaultStyle.author : { ...defaultStyle.author, ...style.author };

  return (
    <div style={ containerStyle } className={ classNames.container }>
      <span style={ contentStyle } className={ classNames.content }>
        <p style={ messageStyle } className={ classNames.message }>
          <strong>"</strong>{ message }<strong>"</strong>
        </p>
        <p style={ authorStyle } className={ classNames.author }>
          <strong><small>{ author }</small></strong>
        </p>
      </span>
    </div>
  );
};

const QuoteOutput = ({ data, style, classNames, config }: QuoteOutputProps): JSX.Element => {
  if (!data || !data.text || typeof data.text != 'string') return <></>;
  if (!style || typeof style !== 'object') style = {};
  if (!config || typeof config !== 'object') config = { disableDefaultStyle: false };
  if (!classNames || typeof classNames !== 'object') classNames = {};

  supportedKeys.forEach(key => {
    if (!style[key] || typeof style[key] !== 'object') style[key] = {};
    if (!classNames[key] || typeof classNames[key] !== 'string') classNames[key] = '';
  });

  const caption = data.caption && typeof data.caption === 'string' ? data.caption : 'Unknown';
  if (data.alignment && typeof data.alignment === 'string') style['textAlign'] = data.alignment;

  return <Quote author={ parse(caption) as string } message={ parse(data.text) as string }
    style={ style as any } classNames={ classNames } config={ config } />;
};

export default QuoteOutput;
