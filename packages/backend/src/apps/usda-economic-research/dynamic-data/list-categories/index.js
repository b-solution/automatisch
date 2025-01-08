export default {
  name: 'List Categories',
  key: 'listCategories',

  async run($) {
    const categories = {
      data: [],
    };
    const { data } = await $.http.get('/category');
    if (data) {
      for (const category of data.data) {
        categories.data.push({
          value: category.header,
          name: category.header,
        });
      }
    }
    return categories;
  },
};
