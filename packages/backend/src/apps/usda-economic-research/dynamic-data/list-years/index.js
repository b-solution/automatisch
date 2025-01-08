export default {
  name: 'List years',
  key: 'listYears',

  async run($) {
    const years = {
      data: [],
    };
    const { data } = await $.http.get('/year');
    if (data) {
      for (const year of data.data) {
        years.data.push({
          value: year.toString(),
          name: year.toString(),
        });
      }
    }
    return years;
  },
};
