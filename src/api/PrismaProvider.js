import CoreApi from './CoreApi';

const BASE_URL = '/api/';

class PrismaProvider extends CoreApi {
  constructor(endpoint) {
    super(BASE_URL, endpoint);
  }
}

export default PrismaProvider;