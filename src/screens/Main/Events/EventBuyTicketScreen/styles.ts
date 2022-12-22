import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView`
    margin-bottom: 20%;

    padding-bottom: 24px;

    background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Content = styled.View`
    padding: 24px;

    background-color: ${({ theme }) => theme.colors.gray[800]};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.lg}px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};
    `}

    margin-bottom: 12px;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.md}px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};
    `}
`;

export const TicketContainer = styled.View`
    align-self: stretch;

    flex-direction: row;

    justify-content: space-between;

    margin-top: 4px;
    margin-bottom: 4px;
`;

export const TicketText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.sm}px;
        font-family: ${theme.fonts.family.regular};
        color: ${theme.colors.white};
    `}
`;

export const PaymentContainer = styled.View`
    align-self: stretch;

    flex-direction: row;

    padding: 20px;

    justify-content: space-between;
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

export const Amount = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.lg}px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};
    `}
`;
