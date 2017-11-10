import DataLoader from 'dataloader'
import { fetchCircles } from '../fetch-functions/circles';

export const circlesLoader = new DataLoader(keys =>
    Promise.all(keys.map(fetchCircles))
  )