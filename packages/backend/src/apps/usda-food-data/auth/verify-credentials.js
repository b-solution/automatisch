const verifyCredentials = async ($) => {
  await $.http.get('/v1/foods/list');

  await $.auth.set({
    screenName: $.auth.data.screenName,
    apiKey: $.auth.data.apiKey,
  });
};

export default verifyCredentials;
