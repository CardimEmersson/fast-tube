import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from "react";
import { FaCaretDown } from "react-icons/fa";
import {
  FormFieldWrapper,
  Input,
  Text,
  Label,
  ButtonSubmit,
  Select,
  Option,
  Icon,
} from "./styles";

interface FormFieldProps {
  fieldType?: "input" | "select";
  label: string;
  type?: HTMLInputTypeAttribute;
  name: string;
  value: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect?: (e: ChangeEvent<HTMLSelectElement>) => void;
  children?: ReactNode;
  required?: boolean;
}

function FormField({
  label,
  type = "text",
  name,
  value,
  defaultValue,
  onChange,
  onChangeSelect,
  fieldType = "input",
  children,
  required,
}: FormFieldProps) {
  return (
    <FormFieldWrapper>
      <Label>
        {fieldType === "select" ? (
          <Select
            name={name}
            defaultValue={defaultValue}
            value={value}
            onChange={onChangeSelect}
            required={required}
          >
            <Option value="" disabled></Option>
            {children}
          </Select>
        ) : (
          <Input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
            required={required}
          />
        )}

        <Text>{label}:</Text>
        {fieldType === "select" && (
          <Icon>
            <FaCaretDown size="1.4rem" />
          </Icon>
        )}
      </Label>
    </FormFieldWrapper>
  );
}

export { FormField, ButtonSubmit, Option };
