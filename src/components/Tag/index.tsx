import { Container, Text } from "./styles";

export type TagType = "company" | "university";

type Props = {
    type: TagType;
};

export function Tag({ type }: Props) {
    const text = {
        company: "Empresa",
        university: "Universidade",
    };

    return (
        <Container>
            <Text>{text[type]}</Text>
        </Container>
    );
}
