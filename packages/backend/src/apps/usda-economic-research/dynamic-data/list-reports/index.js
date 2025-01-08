export default {
  name: 'List reports',
  key: 'listReports',

  async run($) {
    const reports = {
      data: [],
    };
    const { data } = await $.http.get('/report');
    if (data) {
      for (const report of data.data) {
        reports.data.push({
          value: report.header,
          name: report.header,
        });
      }
    }
    return reports;
  },
};
