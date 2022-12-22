import { ReactNode } from "react";

import { Container, IconContainer, Text } from "./styles";

type Props = {
    icon?: ReactNode;
    text: string;
};

export function EmptyList({ icon, text }: Props) {
    return (
        <Container>
            {icon && <IconContainer>{icon}</IconContainer>}
            <Text>{text}</Text>
        </Container>
    );
}
