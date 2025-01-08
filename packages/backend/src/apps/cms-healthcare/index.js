import defineApp from '../../helpers/define-app.js';
import addAuthHeader from './common/add-auth-header.js';
import auth from './auth/index.js';
import dynamicFields from './dynamic-fields/index.js';
import actions from './actions/index.js';

export default defineApp({
  name: 'CMS Healthcare',
  key: 'cms-healthcare',
  iconUrl: '{BASE_URL}/apps/cms-healthcare/assets/favicon.svg',
  authDocUrl: '',
  supportsConnections: true,
  baseUrl: 'https://marketplace.api.healthcare.gov/',
  apiBaseUrl: 'https://marketplace.api.healthcare.gov/api/v1/',
  primaryColor: '#6f42c1',
  beforeRequest: [addAuthHeader],
  auth,
  actions,
  dynamicFields,
});
