export interface Metrics {
  applications: MetricInstance;
  workers: MetricInstance;
  hiring: MetricInstance;
  jobs: MetricInstance;
}

export interface MetricInstance {
  dataset: number[];
  labels: string[];
  total: number;
  percentage: number;
}
