import styled, { css } from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    justify-content: center;

    width: 32%;

    padding: 12px;

    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.sm}px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};
        text-align: center;
    `}
`;
