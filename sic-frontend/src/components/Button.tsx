import { ButtonPropsInterface } from "../models/PropsModels";


function Button<T extends ButtonPropsInterface>({
  width,
  height,
  border,
  radius,
  color,
  onClick,
  children,
  classes,
}: T){
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
      className={classes}
    >{children}</button>
  );
}

export default Button;
