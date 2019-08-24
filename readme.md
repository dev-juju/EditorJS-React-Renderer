# EditorJS-React Renderer

A library that provides functions to parse and render data saved in [Editor.js](https://editorjs.io/) block style into beautifully styled, responsive and flexible React components.

This package works best with output from the Editor.js next generation block style rich text editor library. 
However, there is no dependency on Editor.js. We only require that your data is in a similar [block style](https://editorjs.io/saving-data) format.

## ⭐️ Support ⭐️ 

If you like EditorJS-React Renderer you can support with a small donation on [Patreon](https://www.patreon.com/editorjs_react_renderer). 

You support is greatly appreciated and will help with project improvements and development of new features.

## Setup

Install the package via NPM

```shell
npm i editorjs-react-renderer
```

CDN usage will be available soon...

Add to your module/application

```javascript
import Output from 'editorjs-react-renderer';
OR
const Output = require('editorjs-react-renderer');
```

**Output** accepts a block style data object as first parameter.

```javascript
const data = {
	"time": 1564767102436,
	"blocks": [
		{
			"type": "paragraph",
			"data": {
				"text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repellat, ex omnis veritatis nihil perspiciatis ducimus molestiae reiciendis ipsa possimus voluptatum sapiente culpa sequi nesciunt saepe rem in laudantium maiores!"
			}
		},
		{
			"type": "quote",
			"data": {
				"text": "bla bla bla...",
				"caption": "Adombang Munang Mbomndih",
				"alignment": "left"
			}
		},
		{
			"type": "image",
			"data": {
				"file": {
					"url": "/static/images/iwall_1564767057102.png"
				},
				"caption": "",
				"withBorder": false,
				"stretched": false,
				"withBackground": false
			}
		}
	],
	"version": "2.14.0"
};
```

*The **time** and **version** properties are not required. Only the **blocks** array is required*

Pass your block style data to **Output()** in your react component and watch the magic happen :)

```javascript
const Post = () => (
	<section>
		{ Output(data) }
	</section>
);

export default Post;
```

Each object in the *blocks* property of your block style data is converted to a responsive, styled React component.

**Output()** also accepts a second optional 'style' object parameter through which you can add custom style to the generated components. 
More on this later...

## Supported [Editor.js](https://editorjs.io/) tools/blocks
* [Header](https://github.com/editor-js/header)
* [Paragraph](https://github.com/editor-js/paragraph)
* [Image](https://github.com/editor-js/image)
* [List](https://github.com/editor-js/list)
* [Quote](https://github.com/editor-js/quote)
* [Warning](https://github.com/editor-js/warning)

## Author

Adombang Munang Mbomndih (Bomdi) 

LinkedIn: [LinkedIn](http://www.linkedin.com/in/adombangmunang)

Email: <dzedock@gmail.com>
