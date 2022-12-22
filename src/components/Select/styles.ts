import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";

export type SelectProps = TouchableOpacityProps & {
    isSelected?: boolean;
};

export const Container = styled(TouchableOpacity)<SelectProps>`
    flex: 1;

    align-self: stretch;

    justify-content: center;
    align-items: center;

    padding: 8px;

    max-height: 48px;
    min-height: 48px;

    min-width: auto;

    background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.colors.primary[500] : theme.colors.gray[800]};
`;

export const IconContainer = styled.View``;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: 10px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};
    `}
`;
