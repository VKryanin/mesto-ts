import React, { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  buttonText: string;
  inputType: string[];
  sub: string;
  help: string;
}

export default FormProps;