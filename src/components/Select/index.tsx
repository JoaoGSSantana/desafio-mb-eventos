import { ReactNode } from "react";

import { Container, Text, SelectProps, IconContainer } from "./styles";

type Props = SelectProps & {
    withIcon?: ReactNode;
    text: string;
    onSelect: () => void;
};

export function Select({
    withIcon,
    text,
    isSelected = false,
    onSelect,
    ...rest
}: Props) {
    return (
        <Container isSelected={isSelected} {...rest} onPress={onSelect}>
            {withIcon && <IconContainer>{withIcon}</IconContainer>}
            <Text>{text}</Text>
        </Container>
    );
}
