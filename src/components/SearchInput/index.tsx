import { Input } from "@components/Input";
import { useTheme } from "styled-components/native";

import { ButtonSearch, Container, SearchIcon } from "./styles";

import { Props as InputProps } from "../Input";

type Props = InputProps & {
    onSearch: () => void;
};

export function SearchInput({ onSearch, ...rest }: Props) {
    const { colors } = useTheme();
    return (
        <Container>
            <Input style={{ borderColor: colors.gray[800] }} {...rest} />
            <ButtonSearch onPress={onSearch}>
                <SearchIcon />
            </ButtonSearch>
        </Container>
    );
}
