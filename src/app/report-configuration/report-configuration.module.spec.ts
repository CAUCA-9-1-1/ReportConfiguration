import { ReportConfigurationModule } from './report-configuration.module';

describe('ReportConfigurationModule', () => {
  let reportConfigurationModule: ReportConfigurationModule;

  beforeEach(() => {
    reportConfigurationModule = new ReportConfigurationModule();
  });

  it('should create an instance', () => {
    expect(reportConfigurationModule).toBeTruthy();
  });
});
