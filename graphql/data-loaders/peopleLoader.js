import DataLoader from 'dataloader'
import { fetchPeople } from '../fetch-functions/people';

export const peopleLoader = new DataLoader(keys =>
  Promise.all(keys.map(fetchPeople)
  ))