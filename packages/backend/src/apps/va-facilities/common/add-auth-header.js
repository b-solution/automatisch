const addAuthHeader = ($, requestConfig) => {
  if ($.auth.data?.apiKey) {
    requestConfig.headers.apikey = $.auth.data.apiKey;
  }

  return requestConfig;
};

export default addAuthHeader;
