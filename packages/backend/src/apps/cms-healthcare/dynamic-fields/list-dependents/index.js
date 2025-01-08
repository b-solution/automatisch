export default {
  name: 'List of Dependents',
  key: 'listDependents',

  async run($) {
    const dependents = $.step.parameters.claimTax === 'yes';
    if (dependents) {
      return [
        {
          label: 'Dependents',
          key: 'dependents',
          type: 'dynamic',
          required: false,
          description: '',
          fields: [
            {
              label: 'Age',
              key: 'age',
              type: 'string',
              required: false,
              dependsOn: ['parameters.dependents'],
            },
            {
              label: 'Select Dependent Gender',
              key: 'gender',
              type: 'dropdown',
              required: false,
              options: [
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
              ],
              dependsOn: ['parameters.dependents'],
            },
          ],
        },
      ];
    } 
}

}
