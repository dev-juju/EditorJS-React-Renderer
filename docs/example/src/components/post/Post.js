import React from 'react';
import Output from 'editorjs-react-renderer';
import PropTypes from 'prop-types';
import './Post.css';

const style = {
  header: {},
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
    fontFamily: 'Source Sans Pro'
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
};

const Post = ({ data }) => <section><Output data={ data } style={ style } /></section>;

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;
