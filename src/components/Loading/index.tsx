import { Container, LoadingIndicator } from "./styles";

type Props = {
    size?: number;
};

export function Loading({ size = 28 }: Props) {
    return (
        <Container>
            <LoadingIndicator size={size} />
        </Container>
    );
}
