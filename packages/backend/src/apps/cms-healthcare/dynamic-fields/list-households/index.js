export default {
  name: 'List of Households',
  key: 'listHouseholds',

  async run($) {
    const youAndOthers = $.step.parameters.houseHolds === 'You and other people';
    if(youAndOthers){
       return [
         {
           label: 'Are you married',
           key: 'marriedStatus',
           type: 'dropdown',
           options: [
             { label: 'Yes', value: 'yes' },
             { label: 'No', value: 'No' },
           ],
           description:
             'Answer “Yes” if legally married. Answer “No” if divorced, legally separated, unmarried and living together, or widowed.',
           required: true,
           additionalFields: {
             type: 'query',
             name: 'getDynamicFields',
             arguments: [
               {
                 name: 'key',
                 value: 'listSuppose',
               },
               {
                 name: 'parameters.marriedStatus',
                 value: '{parameters.marriedStatus}',
               },
             ],
           },
         },
         {
           label: 'Claim dependent fedral tax return',
           key: 'claimTax',
           type: 'dropdown',
           options: [
             { label: 'Yes', value: 'yes' },
             { label: 'No', value: 'No' },
           ],
           description: `Include anyone who you'll claim as a tax dependent in 2025. Include them even if they don’t need health coverage. Don't count yourself or your spouse as a dependent.`,
           required: false,
           additionalFields: {
             type: 'query',
             name: 'getDynamicFields',
             arguments: [
               {
                 name: 'key',
                 value: 'listDependents',
               },
               {
                 name: 'parameters.claimTax',
                 value: '{parameters.claimTax}',
               },
             ],
           },
         },
       ]; 
    }
  },
};
