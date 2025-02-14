import { FormFields } from "../enum";

import { BranchingBlockInterface } from "./index";
import { ConditionLinkEnum } from "../enum/condition_actions";
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
export interface MatrixInterface {
  type: FormFields.MATRIX_TABLE;
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  icon: string;
  index: number;
  activeSectionIndex: number;
  id: string;
  value?: string | number | readonly string[] | undefined | number;
  branching?: BranchingBlockInterface;
  conditionLink?: ConditionLinkEnum.OR | ConditionLinkEnum.AND;
  previousItemId?: string;
  rows: RowMatrixItem[];
  columns: ColumnMatrixItem[];
  selectedItems: SelectedMatrixInterface[];
  isPreview?: boolean;
}
