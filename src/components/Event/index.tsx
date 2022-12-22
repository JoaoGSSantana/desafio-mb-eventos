import { TouchableOpacityProps } from "react-native";
import { EventDTO } from "@services/eventsService";

import { Date as DateComponent } from "../Date";
import { Tag } from "../Tag";

import { Container, Content, Organizer, Title, TitleContainer } from "./styles";

type Props = TouchableOpacityProps & {
    event: EventDTO;
    disabled?: boolean;
};

export function Event({ event, disabled = false, ...rest }: Props) {
    const { date, name, organizer, type } = event;

    const newDate = new Date(date);

    return (
        <Container {...rest} disabled={disabled}>
            <Content>
                <TitleContainer>
                    <Title>{name}</Title>
                    <Organizer>{organizer}</Organizer>
                </TitleContainer>
                <Tag type={type} />
            </Content>
            <DateComponent date={newDate} />
        </Container>
    );
}
