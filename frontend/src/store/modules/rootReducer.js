import { combineReducers } from 'redux';

import auth from './auth/reducer';
import delivery from './delivery/reducer';
import deliveryman from './deliveryman/reducer';
import recipient from './recipient/reducer';
import problem from './problem/reducer';
import file from './file/reducer';
import header from './header/reducer';

export default combineReducers({
  auth,
  delivery,
  deliveryman,
  recipient,
  problem,
  file,
  header,
});
