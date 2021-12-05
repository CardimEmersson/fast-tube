import styled, { css } from "styled-components";

interface SelectProps {
  value: any;
}

export const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

export const Label = styled.label`
  img {
    display: none;
  }
`;

export const Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

export const Icon = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  pointer-events: none;
`;

export const Input = styled.input`
  /* Cor de fundo do autocomplete */
  &:-webkit-autofill {
    box-shadow: 0 0 0 30px #53585d inset;
    -webkit-box-shadow: 0 0 0 30px #53585d inset;
  }

  /* Cor do texto do autocomplete */
  &:-webkit-autofill {
    -webkit-text-fill-color: #f5f5f5 !important;
  }

  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px 5px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type="color"]) + ${Text} {
    transform: scale(0.6) translateY(-10px);
  }
  ${({ value = "" }) => {
    const hasValue = value.toString().length > 0;
    return (
      hasValue &&
      css`
        &:not([type="color"]) + ${Text} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;

export const Select = styled.select<SelectProps>`
  position: relative;
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px 5px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;

  &:focus {
    border-bottom-color: var(--primary);
  }

  & + ${Text} {
    pointer-events: none;
  }

  ${({ value = "" }) => {
    const hasValue = value.toString().length > 0;
    return (
      hasValue &&
      css`
        & + ${Text} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;

export const Option = styled.option``;

export const ButtonSubmit = styled.button`
  display: flex;
  margin: 0 auto;
  padding: 1rem 3rem;
  border: 1px solid var(--primary);
  border-radius: 5px;
  cursor: pointer;
  color: var(--primary);
  background: transparent;
  transition: all 0.3s;
  font-size: 1.2rem;

  &:hover:not(:disabled) {
    background-color: var(--primary);
    color: var(--black);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Form = styled.form`
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
