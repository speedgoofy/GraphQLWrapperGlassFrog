import ApiKey from './ApiKey';

import fetchCircle from './circle';
import fetchCircles from './circles';

export default {
    ...fetchCircle,
    ...fetchCircles,
    ...ApiKey

}