import ApiProvider from '../ApiProvider';

class PostService extends ApiProvider {
  async getPosts() {
    return this.api.get('');
  }

  async addPost(newPost) {
    return this.api.post('', newPost);
  }

  async deletePost(id) {
    return this.api.delete(`/${id}`);
  }
}

const postService = new PostService('posts');

export default postService;