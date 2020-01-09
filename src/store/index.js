import { createStore } from 'redux';

import reducers from './models';

const store = createStore(reducers);

export default store;
