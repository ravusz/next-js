import React from 'react';
import postService from '../src/api/services/postService';
import Loader from "../src/components/Loader";
import Error from "../src/components/Error";
import Post from "../src/components/Post";


import MainLayout from "../src/layouts/MainLayout";
import {
  useQuery,
  useQueryClient,
  useMutation,
} from 'react-query'
import PostsForm from '../forms/PostsForm'

const PostsPage = () => {
  const queryClient = useQueryClient()

  const { data, status } = useQuery('posts', async () => {
    const { data } = await postService.getPosts();

    return data
  })

  const addPostMutation = useMutation((newPost) => postService.addPost(newPost), {
    onMutate: async (newPost) => {
      await queryClient.cancelQueries('posts')

      const previousValue = queryClient.getQueryData('posts')

      queryClient.setQueryData('posts', ({ posts }) => {
        return ({
          posts: [...posts, {
            ...newPost,
            id: 'temporary'
          }]
        })
      })


      return previousValue
    },
    onError: (err, variables, previousValue) =>
      queryClient.setQueryData('posts', previousValue),
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
    },
  })


  const deletePostMutation = useMutation((id) => postService.deletePost(id), {
    onMutate: async (postId) => {
      await queryClient.cancelQueries('posts')

      const previousValue = queryClient.getQueryData('posts')

      queryClient.setQueryData('posts', ({ posts }) => {

        return ({
          posts: posts.filter(({ id }) => {
            return id !== postId
          })
        })
      })

      return previousValue
    },
    onError: (err, variables, previousValue) =>
      queryClient.setQueryData('posts', previousValue),
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
    },
  })

  const handleOnSubmit = (values) => addPostMutation.mutate(values)
  const handleRemovePost = (id) => deletePostMutation.mutate(id)

  if (status === 'loading') return (<Loader />);
  if (status === 'error') return (<Error />);

  const { posts = [] } = data;

  return (
    <MainLayout>
      <PostsForm onSubmit={handleOnSubmit} />
      {posts.map(({ id, content, title }) => {
        return (<Post key={id} title={title} content={content} onRemove={() => handleRemovePost(id)} />)
      })}


    </MainLayout>
  );
};

export default PostsPage;
