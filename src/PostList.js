import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  <section className="App__posts">
    {
      posts.map(
        post => (
          <Post {...post} key={post.id} />
        )
      )
    }
  </section>
);

PostList.propTypes = { posts: PropTypes.arrayOf(PropTypes.any) };

PostList.defaultProps = { posts: [] };

export default PostList;
