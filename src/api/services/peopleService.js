import StarWarsProvider from '../StarWarsProvider';

class PeopleService extends StarWarsProvider {
  async getPeople() {
    return this.api.get('');
  }
}

const peopleService = new PeopleService('people');

export default peopleService;