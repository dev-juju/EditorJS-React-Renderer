import React from 'react';
import Output from 'editorjs-react-renderer';
import PropTypes from 'prop-types';
import './Post.css';

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

const Post = ({ data }) => (
  <section>
		{ Output(data, style) }
	</section>
);

Post.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Post;
