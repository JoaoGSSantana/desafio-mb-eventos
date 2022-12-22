import styled, { css } from "styled-components/native";

export const Container = styled.View`
    max-height: 20px;
    min-height: 20px;

    min-width: 60px;
    max-width: 100px;

    align-items: center;
    justify-content: center;

    border-radius: 999px;

    background-color: ${({ theme }) => theme.colors.primary[500]};
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: 10px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};
    `}
`;
