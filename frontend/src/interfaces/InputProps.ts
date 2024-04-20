import { ComponentProps, ElementType } from "react";

type InputOwnProps<E extends ElementType = ElementType> = {
  placeholder: string;
  type: string;
  value?:string;
  secondary?: boolean;
  as?: E;
  background?: boolean;
  border?: string;
  color?: string;
  isForm?: boolean;
  togglePasswordVisibility?: () => void;
}

export type InputProps<E extends ElementType> = InputOwnProps<E> &
  Omit<ComponentProps<E>, keyof InputOwnProps>

export interface StyledInputProps extends InputProps<"input"> {
  isForm?: boolean;
  togglePasswordVisibility?: () => void;
  background?: boolean;
  border?: string;
  color?: string;
}