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
    fontSize: '16px'
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
};

const Post = ({ data }) => <section><Output data={ data } style={ style } /></section>;

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;
