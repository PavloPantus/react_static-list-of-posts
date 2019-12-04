import React from 'react';
import User from './User';
import CommentList from './CommentList';

const Post = post => (
  <article className="post">
    <p>new post</p>
    <h2 className="post__title">
      {post.title}
    </h2>
    <h3 className="post__body">
      {post.body}
    </h3>
    <User postAuthor={post.postAuthor} />
    <CommentList allComments={post.postComments} />
  </article>
);

export default Post;
