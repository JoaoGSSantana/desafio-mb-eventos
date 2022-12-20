import styled, { css } from "styled-components/native";

export const LinkContainer = styled.TouchableOpacity`
    align-self: stretch;

    align-items: center;
    justify-content: center;

    margin-top: 12px;
`;

export const LinkText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.sm}px;
        line-height: ${theme.fonts.sizes.md}px;
        font-family: ${theme.fonts.family.regular};
        color: ${theme.colors.white};
    `}
`;
