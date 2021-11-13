import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { FormFieldWrapper, Input, Text, Label, ButtonSubmit } from "./styles";

interface FormFieldProps {
  label: string;
  type: HTMLInputTypeAttribute;
  name: string;
  value: string | number | readonly string[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormField({ label, type, name, value, onChange }: FormFieldProps) {
  return (
    <FormFieldWrapper>
      <Label>
        <Input type={type} value={value} name={name} onChange={onChange} />
        <Text>{label}:</Text>
      </Label>
    </FormFieldWrapper>
  );
}

export { FormField, ButtonSubmit };
