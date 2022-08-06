export interface LoginTypes {
  value?: string;
  placeholder?: string;
  title?: string;
  type?: string;
  email?: string;
  password?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
