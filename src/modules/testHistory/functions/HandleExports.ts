import * as xlsx from 'xlsx';
import { format } from 'date-fns';
import { IExportReportData } from '../interfaces/ITestHistory';

export const handleExportReport = (report: IExportReportData) => {
  const wb = xlsx.utils.book_new();
  let workbookName = '';

  // eslint-disable-next-line camelcase
  const formatted_date_filters = [
    [
      `${format(
        new Date(report.filters.start),
        'dd/MM/yyyy hh:mm:ss'
      )} - ${format(new Date(report.filters.end), 'dd/MM/yyyy hh:mm:ss')}`,
    ],
  ];

  if (report.values) {
    const binaryWS = xlsx.utils.json_to_sheet([]);
    xlsx.utils.sheet_add_aoa(binaryWS, [['Hyundai Climatic Chamber']]);
    xlsx.utils.sheet_add_aoa(binaryWS, formatted_date_filters, {
      origin: 'A2',
    });
    xlsx.utils.sheet_add_aoa(binaryWS, [report.values.headers], {
      origin: 'A4',
    });
    xlsx.utils.sheet_add_json(binaryWS, report.values.data, {
      origin: 'A5',
      skipHeader: true,
    });
    workbookName = 'Histórico de Testes';
    xlsx.utils.book_append_sheet(wb, binaryWS, workbookName);
  }

  xlsx.writeFile(wb, `Hyundai Climatic Chamber - ${workbookName}.xlsx`);
};
