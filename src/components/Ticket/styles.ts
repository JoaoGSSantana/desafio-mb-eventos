import styled, { css } from "styled-components/native";

export const Container = styled.View`
    align-self: stretch;

    border-top-width: 1px;
    border-bottom-width: 1px;

    margin-bottom: 4px;

    ${({ theme }) => css`
        border-top-color: ${theme.colors.gray[600]};
        border-bottom-color: ${theme.colors.gray[600]};

        background-color: ${theme.colors.gray[800]};
    `}
`;

export const HeaderContainer = styled.View`
    align-self: stretch;

    flex-direction: row;

    padding: 12px;
`;

export const HeaderContent = styled.View`
    flex: 1;
`;

export const TitleContainer = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.md}px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};
    `}
`;

export const Organizer = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.xs}px;
        font-family: ${theme.fonts.family.regular};
        color: ${theme.colors.white};
    `}
`;

export const Content = styled.View`
    padding-right: 24px;
    padding-left: 24px;

    background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const TextContainer = styled.View`
    align-self: stretch;

    flex-direction: row;

    justify-content: space-between;

    margin-top: 2px;
    margin-bottom: 2px;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.xs}px;
        font-family: ${theme.fonts.family.regular};
        color: ${theme.colors.white};
    `}
`;

export const TextBold = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.xs}px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};
    `}

    margin-top: 4px;
    margin-bottom: 4px;
`;

export const AmountContainer = styled.View`
    align-self: stretch;

    align-items: flex-end;
`;
