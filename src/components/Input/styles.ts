import {
    TextInput as TextInputPrimitive,
    TouchableOpacity,
} from "react-native";

import { Eye, EyeClosed } from "phosphor-react-native";

import styled, { css } from "styled-components/native";

export const TextInput = styled(TextInputPrimitive)`
    flex: 1;

    min-height: 50px;
    max-height: 50px;

    margin-top: 12px;
    margin-bottom: 12px;

    align-self: stretch;

    padding-left: 12px;

    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.md}px;
        font-family: ${theme.fonts.family.regular};

        color: ${theme.colors.white};
        background-color: ${theme.colors.gray[800]};

        border-color: ${theme.colors.gray[500]};
        border-width: 1px;
        border-radius: 6px;
    `}
`;

export const TextInputContainer = styled.View`
    flex: 1;

    min-height: 50px;
    max-height: 50px;

    margin-top: 12px;
    margin-bottom: 12px;

    align-self: stretch;
    align-items: center;

    flex-direction: row;
`;

export const TextInputPasswordVisible = styled(TouchableOpacity)`
    z-index: 1;

    padding: 4px;

    position: absolute;
    right: 8px;
`;

export const PasswordIconVisible = styled(Eye).attrs(({ theme }) => ({
    color: theme.colors.primary[500],
}))``;
export const PasswordIconInvisible = styled(EyeClosed).attrs(({ theme }) => ({
    color: theme.colors.primary[500],
}))``;
