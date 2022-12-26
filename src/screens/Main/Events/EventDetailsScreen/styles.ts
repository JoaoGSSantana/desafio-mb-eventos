import { ScrollView } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(ScrollView)`
    flex: 1;

    margin-bottom: 64px;

    padding-bottom: 24px;

    background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Content = styled.View`
    padding-left: 24px;
    padding-right: 24px;

    padding-bottom: 24px;

    background-color: ${({ theme }) => theme.colors.gray[800]};
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.sm}px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};

        margin-top: 12px;
    `}
`;

export const Information = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.sm}px;
        font-family: ${theme.fonts.family.regular};
        color: ${theme.colors.white};
        text-align: justify;

        margin-top: 4px;
    `}
`;

export const Footer = styled.ScrollView`
    padding-left: 24px;
    padding-right: 24px;

    padding-top: 20px;
    padding-bottom: 20px;

    background-color: ${({ theme }) => theme.colors.gray[900]};

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.gray[700]};

    margin-top: -8px;
`;

export const AmountLabel = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.md}px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};
    `}
`;

export const TicketsAvailable = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.xs}px;
        font-family: ${theme.fonts.family.regular};
        color: ${theme.colors.gray[500]};
    `}
`;

export const Amount = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.lg}px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};
    `}
`;

export const Total = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.sm}px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};
    `}
`;
