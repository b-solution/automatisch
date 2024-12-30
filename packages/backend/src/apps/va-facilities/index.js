import defineApp from '../../helpers/define-app.js';
import addAuthHeader from './common/add-auth-header.js';
import auth from './auth/index.js';
import actions from './actions/index.js';

export default defineApp({
  name: 'Va Facilities',
  key: 'va-facilities',
  iconUrl: '{BASE_URL}/apps/va-facilities/assets/favicon.svg',
  authDocUrl: '',
  supportsConnections: true,
  baseUrl: 'https://developer.va.gov/',
  apiBaseUrl: 'https://api.va.gov/services/va_facilities/v1/',
  primaryColor: '#6f42c1',
  beforeRequest: [addAuthHeader],
  auth,
  actions,
});
