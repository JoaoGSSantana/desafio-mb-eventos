import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
    flex: 1;

    align-items: center;

    padding-left: 24px;
    padding-right: 24px;

    padding-top: 32px;
    padding-bottom: 32px;

    background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Title = styled.Text`
    text-align: left;

    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes["2xl"]}px;
        line-height: 32px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};
        width: 90%;
    `}
`;

export const Content = styled.View`
    flex: 1;

    justify-content: center;
    align-items: flex-start;

    align-self: stretch;
`;

export const Footer = styled.View`
    flex: 0.5;

    justify-content: center;
    align-items: center;

    align-self: stretch;
`;
