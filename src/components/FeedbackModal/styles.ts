import { Modal } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(Modal)`
    flex: 1;

    align-items: flex-end;
    justify-content: flex-end;
`;

export const Background = styled.View`
    flex: 1;

    background-color: rgba(0, 0, 0, 0.4);

    align-items: center;
    justify-content: center;

    padding-left: 24px;
    padding-right: 24px;
`;

export const Content = styled.View`
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.gray[800]};

    height: 36%;

    padding: 24px;

    align-self: stretch;

    align-items: center;
    justify-content: center;
`;

export const MessageContainer = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        font-size: ${theme.fonts.sizes.md}px;
        font-family: ${theme.fonts.family.regular};
        text-align: center;
    `}
`;
