import defineAction from '../../../../helpers/define-action.js';

export default defineAction({
  name: 'Facilities',
  key: 'list-facilities',
  description: 'search facilities based on various criteria',
  arguments: [
    {
      label: 'Facility Ids',
      key: 'facilityIds',
      type: 'string',
      required: false,
      description: '',
      variables: true,
    },
    {
      label: 'Zip',
      key: 'zip',
      type: 'string',
      required: false,
      description: '',
      variables: true,
    },
    {
      label: 'State',
      key: 'state',
      type: 'string',
      required: false,
      description: '',
      variables: true,
    },
    {
      label: 'Lat',
      key: 'lat',
      type: 'string',
      required: false,
      description: '',
      variables: true,
    },
    {
      label: 'long',
      key: 'long',
      type: 'string',
      required: false,
      description: '',
      variables: true,
    },
    {
      label: 'radius',
      key: 'radius',
      type: 'string',
      required: false,
      description: '',
      variables: true,
    },
    {
      label: 'Bbox[]',
      key: 'bbox',
      type: 'string',
      required: false,
      description: '',
      variables: true,
    },
    {
      label: 'Visn',
      key: 'visn',
      type: 'string',
      required: false,
      description: '',
      variables: true,
    },
    {
      label: 'Type',
      key: 'type',
      type: 'dropdown',
      required: false,
      description: '',
      options: [
        { label: 'health', value: 'health' },
        { label: 'cemetery', value: 'cemetery' },
        { label: 'benefits', value: 'benefits' },
        { label: 'vet_center', value: 'vet_center' },
      ],
      variables: true,
    },
    {
      label: 'Services',
      key: 'services',
      type: 'string',
      required: false,
      description: '',
      variables: true,
    },
    {
      label: 'Page',
      key: 'page',
      type: 'string',
      required: false,
      description: '',
      variables: true,
    },
    {
      label: 'Per Page',
      key: 'per_page',
      type: 'string',
      required: false,
      description: '',
      variables: true,
    },
  ],

  async run($) {
    const { page, per_page, ...restParams } = $.step.parameters;

    const filteredParams = Object.fromEntries(
      Object.entries(restParams).filter(([key, value]) => value)
    );
    const finalPage = page || '1';
    const finalPerPage = per_page || '25';

    const params = new URLSearchParams({
      page: finalPage,
      per_page: finalPerPage,
      ...filteredParams,
    });

    console.log(params);
    const response = await $.http.get(`/facilities?${params.toString()}`);
    $.setActionItem({ raw: response.data });
  },
});
