export default {
  name: 'List States',
  key: 'listStates',

  async run($) {
    const states = {
      data: [],
    };
    const { data } = await $.http.get('/state');
    if (data) {
      for (const state of data.data) {
        states.data.push({
          value: state.code,
          name: state.name,
        });
      }
    }
    return states;
  },
};
