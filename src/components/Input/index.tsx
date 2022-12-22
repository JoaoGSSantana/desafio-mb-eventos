import { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import {
    TextInput,
    TextInputContainer,
    TextInputPasswordVisible,
    PasswordIconVisible,
    PasswordIconInvisible,
} from "./styles";

type TextInputTypeProps = "default" | "password";

export type Props = TextInputProps & {
    type?: TextInputTypeProps;
};

export function Input({ type = "default", ...rest }: Props) {
    const { colors } = useTheme();
    const [passwordVisibility, setPasswordVisibility] = useState(false);

    function handleVisiblePassword() {
        setPasswordVisibility(!passwordVisibility);
    }

    if (type === "password") {
        return (
            <TextInputContainer>
                <TextInput
                    {...rest}
                    placeholderTextColor={colors.gray[500]}
                    secureTextEntry={!passwordVisibility}
                    style={{ marginBottom: 0, marginTop: 0 }}
                />
                <TextInputPasswordVisible onPress={handleVisiblePassword}>
                    {passwordVisibility ? (
                        <PasswordIconVisible />
                    ) : (
                        <PasswordIconInvisible />
                    )}
                </TextInputPasswordVisible>
            </TextInputContainer>
        );
    }

    return <TextInput {...rest} placeholderTextColor={colors.gray[500]} />;
}
