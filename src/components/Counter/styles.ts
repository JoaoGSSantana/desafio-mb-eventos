import { TouchableOpacity } from "react-native";
import { MinusCircle, PlusCircle } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type PropsIconStyleType = {
    disabled?: boolean;
};

export const Container = styled.View`
    align-self: stretch;

    align-items: center;
    justify-content: space-between;

    flex-direction: row;

    padding-top: 2px;
    padding-bottom: 2px;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.fonts.sizes.sm}px;
        font-family: ${theme.fonts.family.regular};
        color: ${theme.colors.white};
    `}
`;

export const LabelContainer = styled.View`
    flex: 1;

    justify-content: center;
    align-items: flex-start;
`;

export const Button = styled(TouchableOpacity)`
    padding: 8px;
`;

export const MostIcon = styled(PlusCircle).attrs<PropsIconStyleType>(
    ({ theme, disabled }) => ({
        size: 24,
        color: disabled ? theme.colors.gray[500] : theme.colors.white,
    })
)<PropsIconStyleType>``;

export const LessIcon = styled(MinusCircle).attrs<PropsIconStyleType>(
    ({ theme, disabled }) => ({
        size: 24,
        color: disabled ? theme.colors.gray[500] : theme.colors.white,
    })
)<PropsIconStyleType>``;
