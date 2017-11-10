import DataLoader from 'dataloader'
import { fetchDomain } from '../fetch-functions/domains';

export const domainLoader = new DataLoader(keys =>
    Promise.all(keys.map(fetchDomain)
))