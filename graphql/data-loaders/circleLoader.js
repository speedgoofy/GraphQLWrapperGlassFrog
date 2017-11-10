import DataLoader from 'dataloader'
import { fetchCircle } from '../fetch-functions/circle';

export const circleLoader = new DataLoader(keys =>
    //Promise.resolve(fetchCircle(keys))
    Promise.all(keys.map(fetchCircle))
  )