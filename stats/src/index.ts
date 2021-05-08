import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

// create an object that satisfies 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');

// create an instance of 'MatchReader' and pass in something
// that satisfies 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// using composition
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new ConsoleReport()
// );

// const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

const summary = Summary.winsAnalysisWithHtmlReport('Liverpool');

summary.buildAndPrintReport(matchReader.matches);
