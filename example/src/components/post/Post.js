import React from 'react';
import Output from 'editorjs-react-renderer';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({ data }) => (
  <section>
		{ Output(data) }
	</section>
);

Post.propTypes = {
	data: PropTypes.object.isRequired,
};

export default Post;
