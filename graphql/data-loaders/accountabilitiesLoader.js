import DataLoader from 'dataloader'
import { fetchDomain } from '../fetch-functions/domains';

export const accountabilitiesLoader = new DataLoader(keys =>
  Promise.all(keys.map(fetchDomain)
  ))