import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-br";

import { Container, Text } from "./styles";

type Props = {
    date: Date;
};

export function Date({ date }: Props) {
    const when = dayjs(date).locale(ptBR).format("DD [\n] MMM [\n] YYYY");

    return (
        <Container>
            <Text>{when}</Text>
        </Container>
    );
}
