# EditorJS-React Renderer

A library that provides functions to parse and render data saved in [Editor.js](https://editorjs.io/) block style into beautifully styled, responsive and flexible React components.

This package works well with output from the Editor.js rich text editor library. 
However, there is no dependency on Editor.js. We only require that your data is in a similar [block style](https://editorjs.io/saving-data) format.

## ⭐️ Support ⭐️ 

If you like EditorJS-React Renderer you can support with a small donation on [Patreon](https://www.patreon.com/editorjs_react_renderer). 

🙏 Your support will help with project improvements and development of new features 🙏


## Setup

Install the package via NPM

```shell
npm i editorjs-react-renderer
```

Install peer dependencies if you don't already have them in your project

```shell
npm i react prop-types
```

CDN usage will be available soon...

Add to your module/application

```javascript
import Output from 'editorjs-react-renderer';
OR
const Output = require('editorjs-react-renderer');
```

**Output** accepts a block style data object as first argument.

```javascript
const data = {
  "time": 1564767102436,
  "blocks": [
    {
      "type" : "header",
      "data" : {
        "level" : 4,
        "text" : "Editor.js React Renderer"
      }
    },
    {
      "type": "image",
      "data": {
        "file": {
          "url": "https://cdn1.imggmi.com/uploads/2019/8/24/fdbf3465641e401ebe0ec58d278656d1-full.jpg"
        },
        "caption": "Test Caption",
        "withBorder": false,
        "stretched": false,
        "withBackground": false
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium veritatis dolorum cum amet! Ipsa ullam nisi, dolor explicabo ut nobis repudiandae saepe illo error facilis consectetur, quisquam assumenda dolorum."
      }
    },
    {
      "type": "quote",
      "data": {
        "text": "&nbsp;<b>Lorem</b>&nbsp; ipsum dolor sit amet <mark class=\"cdx-marker\">consectetur</mark> adipisicing elit. Doloremque accusantium veritatis dolorum cum amet! Ipsa ullam nisi, dolor explicabo ut nobis repudiandae saepe illo error facilis consectetur, quisquam assumenda dolorum.",
        "caption": "Anonymous",
        "alignment": "left"
      }
    },
    {
      "type": "paragraph",
      "data": {
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium veritatis dolorum cum amet! Ipsa ullam nisi, dolor explicabo ut nobis repudiandae saepe illo error facilis consectetur, quisquam assumenda dolorum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium veritatis dolorum cum amet! Ipsa ullam nisi, dolor explicabo ut nobis repudiandae saepe illo error facilis consectetur, quisquam assumenda dolorum."
      }
    },
    {
      "type" : "warning",
      "data" : {
        "message" : "This is a warning!",
        "title" : ""
      }
    },
    {
      "type" : "list",
      "data" : {
        "items" : [
          "Item one",
          "Another item",
          "Item 3"
        ],
        "style" : "ordered"
      }
    },
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

**Output()** also accepts a second optional object argument through which you can add custom style to the supported components. 

See the [Style](#style) section for more


## Render Single Block

Sometimes you might want to render just a single component like a paragraph or header. While this is possible with the Output() function, you should consider using one of the more specific block output functions.

```javascript
import { ListOutput } from 'editorjs-react-renderer';

const listData = {
	"items" : ["Item one", "Another item", "Item 3"],
	"style" : "unordered" // ordered or unordered
};

// Your custom style will be merged with the defaults, with yours as priority
const listStyle = {
    textAlign: 'left'
};

const Todo = () => ListOutput(listData, style);

export default Todo;
```

See the [API](#api) section for more block output functions


## Style

You can style all supported components/blocks by passing a second argument to the Output() function. This is an object whose keys correspond to the names of the supported blocks you intend to style. The keys must be in lowercase. 

```javascript
const style = {
  header: {
    textAlign: 'left'
  },
  image: {
    width: '500px',
    height: '300px',
  },
  paragraph: {
    textAlign: 'left',
    cursor: 'default'
  },
  quote: {
    textAlign: 'left',
    fontSize: '13px'
  },
  list: {
    textAlign: 'left'
  }
};

const Post = () => (
	<section>
		{ Output(data, style) }
	</section>
);

export default Post;
```

![](https://drive.google.com/file/d/1crjhm49_LHppYDlBEKEzz6DOAujHV2NB)


## API

### Methods/Functions

* Output(data[,style])
* HeaderOutput(data[,style])
* ParagraphOutput(data[,style])
* QuoteOutput(data[,style])
* ListOutput(data[,style])
* ImageOutput(data[,style])
* WarningOutput(data[,style])


## Supported blocks/components
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
