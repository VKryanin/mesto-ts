import { ElementType } from "react";
import { ButtonProps } from "../../interfaces/ButtonProps";
import cn from 'classnames';
import '../../styles/ButtonStyle.scss'

const defaultElement = 'button';

function Button<E extends ElementType = typeof defaultElement>({
  children,
  primary,
  secondary,
  as,
  ...otherProps
}: ButtonProps<E>) {

  const TagName = as || defaultElement
  const classes = cn({ secondary, primary });

  return (
    <TagName className={classes} {...otherProps}>{children}</TagName>
  );
}

export default Button;