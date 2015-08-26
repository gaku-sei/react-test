import React from 'react';
import Comment from 'components/Comment';
import Mainbar from 'components/Mainbar';

React.render(
  <Mainbar />,
  document.getElementById('mainbar')
);

React.render(
  <Comment.Box url="public/json/comments.json" interval={1000} />,
  document.getElementById('app')
);
