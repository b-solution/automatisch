import defineApp from '../../helpers/define-app.js';
import addAuthHeader from './common/add-auth-header.js';
import auth from './auth/index.js';
import actions from './actions/index.js';
import dynamicData from './dynamic-data/index.js';

export default defineApp({
  name: 'USDA Economic Research',
  key: 'usda-economic-research',
  iconUrl: '{BASE_URL}/apps/usda-economic-research/assets/favicon.svg',
  authDocUrl: '',
  supportsConnections: true,
  baseUrl: 'https://api.ers.usda.gov/data/arms',
  apiBaseUrl: 'https://api.ers.usda.gov/data/arms',
  primaryColor: '#6f42c1',
  beforeRequest: [addAuthHeader],
  auth,
  actions,
  dynamicData,
});
