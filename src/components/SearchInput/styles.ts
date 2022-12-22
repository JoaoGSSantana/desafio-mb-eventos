import { MagnifyingGlass } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    align-self: stretch;

    flex-direction: row;

    align-items: center;
    justify-content: center;
`;

export const ButtonSearch = styled(TouchableOpacity)`
    padding: 12px;

    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    margin-left: -6px;

    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.gray[700]};

    background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const SearchIcon = styled(MagnifyingGlass).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors.gray[500],
    weight: "bold",
}))``;
