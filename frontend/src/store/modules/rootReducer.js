import { combineReducers } from 'redux';

import auth from './auth/reducer';
import delivery from './delivery/reducer';
import deliveryman from './deliveryman/reducer';

export default combineReducers({
  auth,
  delivery,
  deliveryman,
});
