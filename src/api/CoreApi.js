import axios from 'axios';

class CoreApi {
  constructor(baseUrl, endpoint = '') {
    this.api = axios.create({ baseURL: baseUrl });

    this.baseUrl = baseUrl;
    this.setEndpointUrl(endpoint);
  }

  setEndpointUrl(path) {
    this.api.defaults.baseURL = `${this.baseUrl}${path}`;
  }
}

export default CoreApi;