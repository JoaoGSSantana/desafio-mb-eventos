import { TouchableOpacity } from "react-native";
import { ArrowLeft } from "phosphor-react-native";

import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;

    height: 20%;

    align-self: stretch;

    justify-content: center;
    align-items: center;

    padding: 20px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.lg}px;
        font-family: ${theme.fonts.family.regular};
        color: ${theme.colors.white};
    `}
`;

export const BackButton = styled(TouchableOpacity)`
    padding: 20px;

    align-items: center;
    justify-content: center;

    margin-left: -24px;
`;

export const ButtonIcon = styled(ArrowLeft).attrs(({ theme }) => ({
    color: theme.colors.white,
    size: 24,
    weight: "bold",
}))``;
