import React from 'react';
import Output from 'editorjs-react-renderer';
import PropTypes from 'prop-types';
import './Post.css';

const style = {
  header: {
    textAlign: 'left',
  },
  image: {
    img: {
      maxHeight: '400px',
    },
    figure: {
      backgroundColor: 'aliceblue',
    },
    figcaption: {
      borderRadius: '20px',
    }
  },
  paragraph: {
    textAlign: 'left',
    cursor: 'default',
  },
  list: {
    textAlign: 'left',
    margin: '10px'
  },
  table: {
    table: {
      margin: '15px 0',
    },
    tr: {
      margin: 0,
    },
    th: {
      padding: '8px 15px',
      backgroundColor: 'lightgreen',
    },
    td: {
      padding: '8px 15px',
    },
  },
  quote: {
    container: {
      width: '100%',
      padding: '5px 10px',
    },
    content: {
      minWidth: '240px',
      padding: '5px 10px',
    },
    author: {
      fontWeight: 'bold',
    },
    message: {
      textAlign: 'left',
      margin: 0
    }
  },
};

const Post = ({ data }) => (
  <section>
    { Output(data, style) }
  </section>
);

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;
