import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { TextInput } from "./styles";

export function Input(props: TextInputProps) {
    const { colors } = useTheme();
    return <TextInput {...props} placeholderTextColor={colors.gray[500]} />;
}
