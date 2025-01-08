import defineAction from '../../../../helpers/define-action.js';

 const setDependents = (defaultPersonKeys, dependent,people) => {
   people.push({
     ...defaultPersonKeys,
     age: Number(dependent.age),
     gender: dependent.gender,
   });
 };
export default defineAction({
  name: 'Health Plans',
  key: 'healthPlans',
  description: 'Search for health Plans ',
  arguments: [
    {
      label: 'Zip Code',
      key: 'zipCode',
      type: 'string',
      required: true,
      description: '',
    },
    {
      label: 'Your Age',
      key: 'age',
      type: 'string',
      required: true,
    },
    {
      label: 'Select Gender',
      key: 'gender',
      type: 'dropdown',
      options: [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
      ],
      required: true,
    },
    {
      label: 'Whose in your house hold',
      key: 'houseHolds',
      type: 'dropdown',
      options: [
        { label: 'Just You', value: 'Just You' },
        { label: 'You and other people', value: 'You and other people' },
      ],
      required: true,
      description:
        'Your household includes you, your spouse if you’re married, and everyone you’ll claim as a dependent on your tax return. Include them all, even if they dont need coveragge',
      additionalFields: {
        type: 'query',
        name: 'getDynamicFields',
        arguments: [
          {
            name: 'key',
            value: 'listHouseholds',
          },
          {
            name: 'parameters.houseHolds',
            value: '{parameters.houseHolds}',
          },
        ],
      },
    },
    {
      label: 'Income',
      key: 'income',
      type: 'string',
      required: true,
      description:
        'What do you think your household income will be in current year?',
    },
  ],

 
  async run($) {
    const defaultPersonKeys = {
      aptc_eligible: true,
      has_mec: false,
      is_pregnant: false,
      is_parent: false,
      uses_tobacco: false,
      utilization_level: 'Low',
    };
    const locationResp = await $.http.get(
      `counties/by/zip/${$.step.parameters.zipCode}`
    );
    const people = [
      {
        ...defaultPersonKeys,
        age: Number($.step.parameters.age),
        gender: $.step.parameters.gender,
      },
    ];
    if ($.step.parameters.dependents && $.step.parameters.claimTax === 'yes') {
      $.step.parameters.dependents.forEach((dependent) => {
        setDependents(defaultPersonKeys,dependent,people);
      });
    }
    if ($.step.parameters.marriedStatus === 'yes') {
      setDependents(
        defaultPersonKeys,
        {
          age: $.step.parameters.supposeAge,
          gender: $.step.parameters.supposeGender,
        },
        people
      );
    }
    const body = {
      household: {
        income: parseFloat($.step.parameters.income),
        people,
        has_married_couple: $.step.parameters.marriedStatus === 'yes',
      },
      market: 'Individual',
      place: {
        countyfips: locationResp.data.counties[0].fips,
        state: locationResp.data.counties[0].state,
        zipcode: locationResp.data.counties[0].zipcode,
      },
      limit: 50,
      offset: 0,
      order: 'asc',
      year: new Date().getFullYear(),
    };
    const getPlans = await $.http.post(`plans/search`, body);

    $.setActionItem({
      raw: getPlans.data,
    });
  },
});
