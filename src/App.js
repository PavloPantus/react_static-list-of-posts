import React from 'react';
import PostList from './PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = (postsToPrepare, commentsToPrepare, usersToPrepare) => (
  postsToPrepare.map(
    post => (
      {
        ...post,
        postAuthor: usersToPrepare.find(user => user.id === post.userId),
        postComments:
          commentsToPrepare.filter(Comment => Comment.postId === post.id),
      }
    )
  )
);

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts(posts, comments, users)} />
  </div>
);

export default App;
