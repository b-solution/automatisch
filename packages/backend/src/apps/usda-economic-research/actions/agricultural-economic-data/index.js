import { URLSearchParams } from 'url';
import defineAction from '../../../../helpers/define-action.js';

export default defineAction({
  name: 'Agricultural Economic Data',
  key: 'agricultural-economic-data',
  description: '',
  arguments: [
    {
      label: 'Category',
      key: 'category',
      type: 'dropdown',
      required: true,
      description: '',
      variables: true,
      source: {
        type: 'query',
        name: 'getDynamicData',
        arguments: [
          {
            name: 'key',
            value: 'listCategories',
          },
        ],
      },
    },
    {
      label: 'Year',
      key: 'year',
      type: 'dropdown',
      required: true,
      description: '',
      variables: true,
      source: {
        type: 'query',
        name: 'getDynamicData',
        arguments: [
          {
            name: 'key',
            value: 'listYears',
          },
        ],
      },
    },
    {
      label: 'State',
      key: 'state',
      type: 'dropdown',
      required: true,
      description: '',
      variables: true,
      source: {
        type: 'query',
        name: 'getDynamicData',
        arguments: [
          {
            name: 'key',
            value: 'listStates',
          },
        ],
      },
    },
    {
      label: 'Report',
      key: 'report',
      type: 'dropdown',
      required: true,
      description: '',
      variables: true,
      source: {
        type: 'query',
        name: 'getDynamicData',
        arguments: [
          {
            name: 'key',
            value: 'listReports',
          },
        ],
      },
    },
  ],

  async run($) {
    const searchParams = new URLSearchParams($.step.parameters);
    const response = await $.http.get(`/surveydata?${searchParams.toString()}`);
    $.setActionItem({ raw: response.data });
  },
});
