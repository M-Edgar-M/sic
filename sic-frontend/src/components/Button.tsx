import { forwardRef } from "react";
import { ButtonPropsInterface, RefType } from "../models/PropsModels";
function Button<T extends ButtonPropsInterface>(
  {
    width,
    height,
    border,
    radius,
    color,
    onClick,
    children,
    className,
    type,
  }: T,
  ref: RefType
) {
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
      className={className}
    >
      {children}
    </button>
  );
}

export default forwardRef(Button);
