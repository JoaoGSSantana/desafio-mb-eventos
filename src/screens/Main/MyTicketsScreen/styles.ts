import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes["2xl"]}px;
        line-height: 26px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};

        align-self: flex-start;
        margin-top: 24px;
    `}
`;
