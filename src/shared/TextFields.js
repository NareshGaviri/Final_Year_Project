import React,{useState} from "react"
import { InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import validate from "./validations"
import {
  TextField,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
export const EmailInput = ({
  label,
  name,
  id,
  type,
  handleChange,
  handleSubmit,
  className,
  required,
  value = "",
  variant = "outlined",
}) => {
  return (
    <ValidatorForm autoComplete="on" onSubmit={handleSubmit} >
    <TextValidator
        label={label}
        name={name}
        id={id}
        className={className}
        type={type}
        onChange={handleChange}
        helperText={!validate.checkEmail(value) ? "Enter valid " + label : ""}
        errorMessages={["this field is required", "email is not valid"]}
        validators={["required", "isEmail"]}
        required={required}
        value={value}
        variant={variant}
        size="small"
        fullWidth
      />
    </ValidatorForm>
  );
};
export const PasswordInput = ({
  label,
  name,
  type,
  id,
  handleChange,
  handleSubmit,
  className,
  required,
  value = "",
  variant = "outlined",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <ValidatorForm autoComplete="on" onSubmit={handleSubmit}>
    <TextValidator
      password
      type={type}
      label={label}
      name={name}
      id={id}
      className={className}
      type={showPassword ? "text" : "password"}
      onChange={handleChange}
      variant={variant}
      size="small"
      required={required}
      value={value}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    </ValidatorForm>
  );
};
export const NameInput = ({
  label,
  type,
  id,
  name,
  handleChange,
  required,
  value = "",
  variant = "outlined",
}) => {
  return (
    <TextField
      label={label}
      type={type}
      id={id}
      name={name}
      onChange={(e) =>
        validate.checkName(e.target.value) ? handleChange(e) : () => {}
      }
      required={required}
      helperText={!validate.checkName(value) ? "Enter valid " + label : ""}
      value={value}
      variant={variant}
      size="small"
      fullWidth
    />
  );
};
export function CustomField(details) {
  switch (details.type) {
    case "email":
      return <EmailInput {...details} />

    case "password":
      return <PasswordInput {...details} />;
      case "name" : return <NameInput {...details} />;
    default:
      return <div />;
  }
}