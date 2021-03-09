import CoreApi from './CoreApi';

const BASE_URL = '/api/';

class ApiProvider extends CoreApi {
  constructor(endpoint) {
    super(BASE_URL, endpoint);
  }
}

export default ApiProvider;