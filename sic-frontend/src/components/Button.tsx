import { ButtonPropsInterface } from "../models/PropsModels";


function Button<T extends ButtonPropsInterface>({
  width,
  height,
  border,
  radius,
  color,
  onClick,
  children,
  className,
  buttonType,
}: T){
  return (
    <button
      // type={buttonType}
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
      className={className}
    >{children}</button>
  );
}

export default Button;
