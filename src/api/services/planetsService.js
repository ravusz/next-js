import StarWarsProvider from '../StarWarsProvider';

class PlanetsService extends StarWarsProvider {
  async getPlanets() {
    return this.api.get('');
  }
}

const planetsService = new PlanetsService('planets');

export default planetsService;