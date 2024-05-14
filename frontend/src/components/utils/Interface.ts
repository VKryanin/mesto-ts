import { ComponentProps, ElementType, ReactNode } from "react";

export interface FormProps {
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  buttonText: string;
  inputType: string[];
  sub: string;
  help: string;
}

export interface SectionProps {
  width: string;
  height: string;
  minheight: string;
  minwidth: string;
  contentBox?: boolean;
  block?: boolean;
  column?: boolean;
  justifycontent?: string;
  alignItems?: string;
  gap?: string;
  zIndex?: string;
  padding?: string;
  margin?: string;
  gridArea?: string;
  transition?: string;
}

type ButtonOwnProps<E extends ElementType = ElementType> = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  to?: string;
  as?: E;
}

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<ComponentProps<E>, keyof ButtonOwnProps>

type InputOwnProps<E extends ElementType = ElementType> = {
  placeholder: string;
  type: string;
  value?: string;
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

export type AuthData = {
  email: string;
  password: string;
}

export type UpdateData = {
  name: string;
  about: string;
}

export type UpdateAvatar = {
  avatar: string;
}


export type handleSubmitType = (e: React.FormEvent<HTMLFormElement>, authData: AuthData) => void;

export interface ProtectedRouteProps {
  element: React.ComponentType;
}

export type CardType = {
  _id: string,
  name: string,
  link: string,
  owner: string,
  likes: string[],
  createdAt: string,

}

export interface AddImagePopupProps {
  id: string;
  title: string;
  type: string;
  buttonText: string | null;
  onClose: () => void;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
  isOpen: boolean;
}

