import { KeyboardAvoidingView } from "react-native";

import styled, { css } from "styled-components/native";

export const Container = styled(KeyboardAvoidingView)`
    flex: 1;

    align-items: center;

    padding-left: 24px;
    padding-right: 24px;

    padding-top: ${48}px;
    padding-bottom: 24px;

    background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes["2xl"]}px;
        line-height: 26px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};

        align-self: flex-start;
        margin-top: 12px;
    `}
`;

export const Content = styled(KeyboardAvoidingView)`
    flex: 1;

    padding-top: 24px;

    align-items: flex-start;

    align-self: stretch;
`;

export const Footer = styled.View`
    flex: 1;

    align-self: stretch;

    padding-top: 32px;
`;
