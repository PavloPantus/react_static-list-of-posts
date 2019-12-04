import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ allComments }) => (
  <section className="post__comments">
    <p>comments</p>
    {allComments.map(comment => <Comment newComment={comment} />)}
  </section>
);

CommentList.propTypes = { allComments: PropTypes.arrayOf(PropTypes.any) };

CommentList.defaultProps = { allComments: [] };

export default CommentList;
