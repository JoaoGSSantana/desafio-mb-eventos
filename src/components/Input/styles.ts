import { TextInput as TextInputPrimitive } from "react-native";

import styled, { css } from "styled-components/native";

export const TextInput = styled(TextInputPrimitive)`
    flex: 1;

    min-height: 50px;
    max-height: 50px;

    margin-top: 12px;
    margin-bottom: 12px;

    align-self: stretch;

    padding-left: 12px;

    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.md}px;
        font-family: ${theme.fonts.family.regular};
        color: ${theme.colors.white};

        border-color: ${theme.colors.gray[500]};
        border-width: 1px;
        border-radius: 6px;
    `}
`;
