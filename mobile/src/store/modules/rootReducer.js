import { combineReducers } from 'redux';

// Import reducers
import auth from './auth/reducer';
import user from './user/reducer';
import deliveryman from './deliveryman/reducer';
import delivery from './delivery/reducer';
import problem from './problem/reducer';

export default combineReducers({
	auth,
  user,
  deliveryman,
  delivery,
  problem
});
