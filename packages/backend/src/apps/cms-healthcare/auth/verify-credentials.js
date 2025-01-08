const verifyCredentials = async ($) => {
  await $.http.get('counties/by/zip/27360');
  await $.auth.set({
    screenName: $.auth.data.screenName,
    apiKey: $.auth.data.apiKey,
  });
};

export default verifyCredentials;
