import React, { ReactElement } from "react";

import { Container, TextInput } from "./styles";

interface propsInput {
    icon: ReactElement
    placeholder: string
    secureTextEntry?: boolean
    inputRef?: any
    onSubmitEditing: () => void
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send'
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad'
}

const Input: React.FC<propsInput> = ({
  icon,
  placeholder,
  secureTextEntry,
  inputRef,
  onSubmitEditing,
  returnKeyType,
  keyboardType,
}: any) => {
  return (
    <Container>
      {icon && icon}
      <TextInput
        ref={inputRef}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        autoCapitalize="none"
      />
    </Container>
  );
};

export default Input;
