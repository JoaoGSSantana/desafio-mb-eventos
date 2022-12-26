import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    padding-top: 24px;

    background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const HeaderContainer = styled.View`
    align-self: stretch;

    flex-direction: row;

    padding-right: 24px;
    padding-left: 24px;

    padding-top: 12px;
    padding-bottom: 32px;
`;

export const TitleContainer = styled.View`
    flex: 1;

    align-items: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes["2xl"]}px;
        line-height: 26px;
        font-family: ${theme.fonts.family.bold};
        color: ${theme.colors.white};
    `}
`;

export const LogOutButton = styled(TouchableOpacity)``;

export const LogOut = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.sm}px;
        line-height: 20px;
        font-family: ${theme.fonts.family.regular};
        color: ${theme.colors.white};
    `}
`;
