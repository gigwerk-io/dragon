import {DataSet} from './DataSet';

export interface Graph {
  jobs: {
    labels: Array<string>;
    datasets: DataSet[];
  };
  payments: {
    labels: Array<string>;
    datasets: DataSet[];
  };
}
