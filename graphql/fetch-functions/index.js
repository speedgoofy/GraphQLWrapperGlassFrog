import ApiKey from './ApiKey';

import fetchCircle from './circle';
import fetchCircles from './circles';
import fetchRoles from './roles';

export default {
  ...fetchCircle,
  ...fetchCircles,
  ...fetchRoles,
  ...ApiKey

}