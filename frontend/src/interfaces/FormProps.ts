import React, { ElementType, ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  buttonText: string;
  inputType: string[];
}

export default FormProps;