import React from 'react';
import Output from 'editorjs-react-renderer';
import PropTypes from 'prop-types';
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
  codeBox: {
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
};

const Post = ({ data }) => <section><Output data={ data } style={ style } /></section>;

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;
