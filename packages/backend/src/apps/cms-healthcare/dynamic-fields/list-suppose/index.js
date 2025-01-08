export default {
  name: 'List of Suppose',
  key: 'listSuppose',

  async run($) {
    const isMarried = $.step.parameters.marriedStatus === 'yes'
    if(isMarried){
        return [
          {
            label: 'Age',
            key: 'supposeAge',
            type: 'string',
            required: false,
            description: 'Enter your suppose age'
          },
          {
            label: 'Select Dependent Gender',
            key: 'supposeGender',
            type: 'dropdown',
            required: false,
            options: [
              { label: 'Male', value: 'Male' },
              { label: 'Female', value: 'Female' },
            ],
            description: 'Enter your suppose gender'
          },
        ];
    }
  },
};
