import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  var moment = require('moment');
  const postTime = moment(post.created).fromNow();

  return (

    <div>
      <img src='https://99px.ru/sstorage/41/2016/10/image_411410160040295807156.jpg' alt="avatar"></img>
      <div>Leo</div>
      <div>Created: {postTime}</div>
      <Link to={`/posts/${post.id}`}>
        <div>{post.content}</div>
      </Link>
    </div >


  );
}