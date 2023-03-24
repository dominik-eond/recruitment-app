import { CheckboxProps as MuiCheckboxProps } from "@mui/material";
import { StyledCheckbox } from "./Checkbox.styled";
import { ReactComponent as CheckboxIcon } from "./icons/CheckBoxOutlineBlankOutlined.svg";

export interface CheckboxProps extends MuiCheckboxProps {
  error?: boolean;
}

const Checkbox = ({ color = "primary", error, ...rest }: CheckboxProps) => {
  return (
    <StyledCheckbox
      color={color}
      error={error ? true : undefined}
      icon={<CheckboxIcon />}
      {...rest}
    />
  );
};

export default Checkbox;
