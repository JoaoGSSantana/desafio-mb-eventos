import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    align-self: stretch;

    flex-direction: row;

    padding: 14px;

    border-top-width: 0.5px;
    border-bottom-width: 0.5px;

    ${({ theme }) => css`
        border-top-color: ${theme.colors.gray[700]};
        border-bottom-color: ${theme.colors.gray[700]};

        background-color: ${theme.colors.gray[800]};
    `}
`;

export const Content = styled.View`
    flex: 1;
`;

export const TitleContainer = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.lg}px;
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
