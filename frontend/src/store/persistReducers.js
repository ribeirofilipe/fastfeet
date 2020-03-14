import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'fastfeet',
      storage,
      whitelist: ['auth', 'delivery', 'deliveryman', 'recipient', 'problem'],
    },
    reducers
  );

  return persistedReducer;
};
