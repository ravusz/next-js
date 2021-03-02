import StarWarsProvider from '../StarWarsProvider';

class PlanetsService extends StarWarsProvider {
  async getPlanets(page) {
    return this.api.get('', { params: { page } });
  }
}

const planetsService = new PlanetsService('planets');

export default planetsService;