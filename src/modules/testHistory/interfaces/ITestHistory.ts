export interface ITestHistoryData {
  headers: string[];
  data: {
    testName: string;
    description: string;
    start: Date;
    end: Date;
    duration: string;
  }[];
}

export interface IExportReportData {
  values: ITestHistoryData;
  filters: {
    start?: Date;
    end?: Date;
  };
}

export interface IFilterDate {
  start: Date;
  end: Date;
}

export interface IData {
  testName: string;
  description: string;
  start: Date;
  end: Date;
  duration: string;
}
