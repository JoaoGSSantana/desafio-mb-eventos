import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;

    align-self: stretch;

    padding: 12px;

    max-height: 50px;

    border-radius: 64px;

    background-color: ${({ theme }) => theme.colors.primary[500]};
`;
export const ButtonText = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.sm}px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.gray[900]};
    `}
`;
