import SvgComponent from "@/assets/svg/EyeSlash";
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

type Props = {
  value: string;
  onChangeValue?: (value: string) => void;
  keyboardType?: KeyboardTypeOptions | undefined;
  placeholder?: string;
  inputTitle?: string;
  isInputPassword?: boolean;
  error?: string;
  isSubmitted?: boolean;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  styleContainer?: ViewStyle;
  styleInput?: StyleProp<TextInputProps>;
};

const Input = ({
  value,
  onChangeValue,
  keyboardType,
  placeholder,
  inputTitle,
  isInputPassword,
  error,
  isSubmitted,
  onBlur,
  styleContainer,
  styleInput,
}: Props) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <View style={styleContainer}>
      {inputTitle && (
        <Text className="mb-2 text-sm font-regular text-text-invert">
          {inputTitle}
        </Text>
      )}
      <View
        style={[
          {
            flex: 1,
            height: 54,
            borderColor: "#404040",
            borderWidth: 1,
            paddingHorizontal: 16,
            borderRadius: 19,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <TextInput
          value={value}
          onChangeText={onChangeValue}
          keyboardType={keyboardType || "default"}
          placeholder={placeholder}
          placeholderTextColor="#A0A0A0"
          secureTextEntry={isInputPassword && !isShowPassword}
          onBlur={onBlur}
          style={[
            {
              fontFamily: "inter-medium",
              color: "white",
              flex: 1,
            },
            styleInput,
          ]}
        />
        {isInputPassword && (
          <TouchableOpacity onPress={() => setIsShowPassword((prev) => !prev)}>
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
