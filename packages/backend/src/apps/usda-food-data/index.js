import defineApp from '../../helpers/define-app.js';
import addAuthHeader from './common/add-auth-header.js';
import auth from './auth/index.js';
import actions from './actions/index.js';

export default defineApp({
  name: 'USDA Food Data',
  key: 'usda-food-data',
  iconUrl: '{BASE_URL}/apps/usda-food-data/assets/favicon.svg',
  authDocUrl: '',
  supportsConnections: true,
  baseUrl: 'https://api.nal.usda.gov/fdc',
  apiBaseUrl: 'https://api.nal.usda.gov/fdc',
  primaryColor: '#6f42c1',
  beforeRequest: [addAuthHeader],
  auth,
  actions,
});
