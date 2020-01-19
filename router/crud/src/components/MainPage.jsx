import React from 'react';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';
import useFetch from '../hooks/useFetch';

export default function MainPage(props) {
  
  const [posts] = useFetch(process.env.REACT_APP_DATA_URL, []);
  console.log(posts);

  return (
    <>
      <Link to="/posts/new">
        <button>Создать пост</button>
      </Link>

      <h2>Все посты</h2>
      <div>
        {posts.map(post => <PostCard key={post.id} post={post} />)}
      </div>
    </>
  );
}
