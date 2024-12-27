import defineAction from '../../../../helpers/define-action.js';

export default defineAction({
  name: 'Search Food',
  key: 'searchFood',
  description: 'Search for foods using keywords',
  arguments: [
    {
      label: 'Food item',
      key: 'query',
      type: 'string',
      required: true,
      variables: true,
      description: '',
    },
  ],

  async run($) {
    const query = $.step.parameters.query;
    const params = { query: query, pageNumber: 2, pageSize: 25 };
    const { data } = await $.http.get('/v1/foods/search', { params });
    $.setActionItem({ raw: data });
  },
});
