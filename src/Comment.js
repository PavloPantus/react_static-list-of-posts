import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ newComment }) => (
  <section className="post__comment">
    <p>comment</p>
    <h3 className="comment__author">
      Author of comment:
      {' '}
      {newComment.name}
    </h3>
    <h3 className="comment__author__email">
    comment author email:
      {' '}
      {newComment.email}
    </h3>
    <h3 className="comment__body">
      {' '}
      {newComment.body}
    </h3>
  </section>
);

Comment.propTypes = { newComment: PropTypes.objectOf(PropTypes.any) };

Comment.defaultProps = { newComment: {} };

export default Comment;
