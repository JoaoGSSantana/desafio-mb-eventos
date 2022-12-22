import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const HeaderContainer = styled.View`
    padding-top: 12px;

    padding-left: 24px;
    padding-right: 24px;

    margin-bottom: 8px;
`;

export const FilterGroup = styled.View`
    align-self: stretch;

    justify-content: space-evenly;

    flex-direction: row;
`;
