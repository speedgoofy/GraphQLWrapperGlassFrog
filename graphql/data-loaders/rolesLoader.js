import DataLoader from 'dataloader'
import { fetchRoles } from '../fetch-functions/roles';

export const rolesLoader = new DataLoader(keys =>
    Promise.all(keys.map(fetchRoles)
))