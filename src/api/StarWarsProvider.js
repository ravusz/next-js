import CoreApi from './CoreApi';

const STAR_WARS_URL = 'https://swapi.dev/api/';

class StarWarsProvider extends CoreApi {
  constructor(endpoint) {
    super(STAR_WARS_URL, endpoint);
  }
}

export default StarWarsProvider;