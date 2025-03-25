interface Field {
  type: 'input' | 'checkbox' | 'radio' | 'date';
  required: boolean;
  title: string;
  values?: any[];
}
