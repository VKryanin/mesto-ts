import { ComponentProps, ElementType } from "react";

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  to?: string;
  as?: E;
  background?: boolean;
  border?: string;
  color?: string;
}

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>

export interface StyledButtonProps extends ButtonProps<"button"> {
  background?: boolean;
  border?: string;
  color?: string;
}