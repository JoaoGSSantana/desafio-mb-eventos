import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

import { CheckCircle, XCircle } from "phosphor-react-native";

type ScreenPropsType = {
    success: boolean;
};

export const Container = styled(SafeAreaView)`
    flex: 1;

    align-items: center;

    padding-left: 24px;
    padding-right: 24px;

    background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const Content = styled.View`
    align-items: center;
    justify-content: center;

    height: 70%;
    margin-bottom: 12px;
`;

export const Title = styled.Text<ScreenPropsType>`
    ${({ theme, success }) => css`
        font-size: ${theme.fonts.sizes["2xl"]}px;
        font-family: ${theme.fonts.family.bold};
        color: ${success ? theme.colors.success : theme.colors.fail};
        text-align: center;
    `}
`;

export const Message = styled.Text<ScreenPropsType>`
    ${({ theme, success }) => css`
        font-size: ${theme.fonts.sizes.lg}px;
        font-family: ${theme.fonts.family.regular};
        color: ${success ? theme.colors.success : theme.colors.fail};
        text-align: center;
    `}

    margin-top: 12px;
`;

export const SuccessIcon = styled(CheckCircle).attrs(({ theme }) => ({
    color: theme.colors.success,
    size: 100,
}))``;

export const FailIcon = styled(XCircle).attrs(({ theme }) => ({
    color: theme.colors.fail,
    size: 100,
}))``;
