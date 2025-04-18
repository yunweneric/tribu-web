import { KpiType } from '../enums/instanvi.enum';

export interface PerformanceMetricDto {
  metricId?: string;
  programId: string;
  kpiType?: KpiType;
  value?: number;
}

export type UpdatePerformanceMetricDto = Partial<PerformanceMetricDto>;
