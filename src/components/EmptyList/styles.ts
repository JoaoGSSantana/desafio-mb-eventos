import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.gray[900]};

    align-items: center;
    justify-content: center;

    padding-left: 24px;
    padding-right: 24px;

    min-height: 250px;
`;

export const IconContainer = styled.View``;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.md}px;
        font-family: ${theme.fonts.family.regular};
        color: ${theme.colors.gray[600]};
        text-align: center;
    `}
`;
