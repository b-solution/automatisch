const addAuthHeader = ($, requestConfig) => { 
  if ($.auth.data?.apiKey) {
    requestConfig.params = {
      ...requestConfig.params,
      apikey: $.auth.data.apiKey,
    };
  }
  return requestConfig;
};

export default addAuthHeader;