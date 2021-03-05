import { FieldError } from 'react-hook-form';

export interface ITextAreaDefaultProps {
  name: string;
  icon?: React.ReactNode;
  readOnly?: boolean;
  labelText: string;
  placeholder: string;
  error?: FieldError;
  loading?: boolean;
}
