import React, { useState } from "react";
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import SvgComponent from "../assets/svg/EyeSlash";

interface InputProps {
  value: string;
  onChangeValue?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  inputTitle?: string;
  isInputPassword?: boolean;
  error?: string;
  isSubmitted?: boolean;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  styleContainer?: ViewStyle;
  styleInput?: StyleProp<TextInputProps>;
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeValue,
  keyboardType = "default",
  placeholder,
  inputTitle,
  isInputPassword,
  error,
  isSubmitted,
  onBlur,
  styleContainer,
  styleInput,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const togglePasswordVisibility = () => setIsShowPassword((prev) => !prev);

  const inputContainerStyle = {
    flex: 1,
    height: 54,
    borderColor: "#404040",
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 19,
    flexDirection: "row" as const,
    justifyContent: "space-between" as const,
    alignItems: "center" as const,
  };

  const textInputStyle = [
    {
      fontFamily: "inter-medium",
      color: "white",
      flex: 1,
    },
    styleInput,
  ];

  return (
    <View style={styleContainer}>
      {inputTitle && (
        <Text className="mb-2 text-sm font-regular text-text-invert">
          {inputTitle}
        </Text>
      )}
      <View style={[inputContainerStyle]}>
        <TextInput
          value={value}
          onChangeText={onChangeValue}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor="#A0A0A0"
          secureTextEntry={isInputPassword && !isShowPassword}
          onBlur={onBlur}
          style={textInputStyle}
        />
        {isInputPassword && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <SvgComponent />
          </TouchableOpacity>
        )}
      </View>
      {error && isSubmitted && (
        <Text className="mt-1 text-sm text-alerts-error">{error}</Text>
      )}
    </View>
  );
};

export default Input;
