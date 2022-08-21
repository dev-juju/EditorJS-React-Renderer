import React from 'react';
import Output from 'editorjs-react-renderer';
import './Post.css';

const style = {
  header: {
    h1: {
      color: 'lightseagreen',
      fontFamily: 'cursive'
    },
  },
  image: {
    img: {},
    figure: {},
    figcaption: {}
  },
  paragraph: {
    textAlign: 'justify',
    margin: '8px 0',
    fontSize: '18px',
    lineHeight: '1.7',
    fontWeight: 200,
  },
  list: {},
  table: {
    table: {},
    tr: {},
    th: {},
    td: {},
  },
  quote: {
    container: {},
    content: {},
    author: {},
    message: {}
  },
  codebox: {
    code: { lineHeight: '22px' },
  },
  warning: {
    icon: {
      width: '28px',
    },
    title: {
      marginRight: '10px'
    },
    message: {
      textAlign: 'left'
    },
  },
  avatar: {
    height: '40px',
    width: '40px',
    borderRadius: '20px',
    margin: '8px',
    boxShadow: '0 0 4px 0 rgba(0,0,0,0.5)',
    backgroundColor: '#1e242a'
  }
};

const AvatarRenderer = ({ data, style, classNames, config }) => {
  let content = null;

  if (typeof data === 'string') content = data;
  else if (typeof data === 'object' && data.imageURL && typeof data.imageURL === 'string') content = data.imageURL;

  return content ? <img style={ style } className={ classNames } src={ content } /> : '';
};

const renderers = {
  avatar: AvatarRenderer
};

const Post = ({ data }) => <section><Output data={ data } style={ style } renderers={ renderers } /></section>;

export default Post;
