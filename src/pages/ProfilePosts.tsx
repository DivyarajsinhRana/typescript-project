import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { createPostAsync, fetchPostsAsync, Post } from '../redux/postSlice'

const ProfilePosts: React.FC = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.posts)

  useEffect(() => {
    dispatch(fetchPostsAsync())
  }, [dispatch])

  const handleCreatePost = () => {
    const newPost = { title: 'New Post', body: 'New post content' }
    dispatch(createPostAsync(newPost))
  }
  return (
    <div>
      <button onClick={() => handleCreatePost()}>Create Post</button>
      {state.loading && <p>Loading posts...</p>}
      {state.data.map((post: Post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default ProfilePosts
