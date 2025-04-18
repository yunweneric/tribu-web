import { FormFields } from '../enum';

import { BranchingBlockInterface } from './index';
import { ConditionLinkEnum } from '../enum/condition_actions';
import { BaseInterface } from './base_interface';
interface RowMatrixItem {
  name: string;
  isPreview?: boolean;
  label: string;
  placeholder?: string;
  id: string;
  value?: string | number | readonly string[] | undefined | number;
}
interface ColumnMatrixItem {
  name: string;
  label: string;
  placeholder?: string;
  id: string;
  value?: string | number | readonly string[] | undefined | number;
  isPreview?: boolean;
}

interface SelectedMatrixInterface {
  row: RowMatrixItem;
  column: ColumnMatrixItem;
}
export interface MatrixInterface extends BaseInterface {
  type: FormFields.MATRIX_TABLE;
  value?: string | number | readonly string[] | undefined | number;
  rows: RowMatrixItem[];
  columns: ColumnMatrixItem[];
  selectedItems: SelectedMatrixInterface[];
}
