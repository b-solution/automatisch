const verifyCredentials = async ($) => {
  console.log($)
  await $.http.get('/facilities?page=1&per_page=5');

  await $.auth.set({
    screenName: $.auth.data.screenName,
    apiKey: $.auth.data.apiKey,
  });
};

export default verifyCredentials;
