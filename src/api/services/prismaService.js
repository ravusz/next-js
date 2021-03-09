import PrismaProvider from '../PrismaProvider';

class PostsService extends PrismaProvider {
  async getPosts() {
    return this.api.get('');
  }
}

const postsService = new PostsService('post');

export default postsService;