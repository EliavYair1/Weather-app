export interface InputProps {
  value?: string;
  placeholder?: string;
  title?: string;
  error?: string;
  type?: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
