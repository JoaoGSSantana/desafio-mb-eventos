import { useCallback, useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Alert } from "react-native";

import { Event } from "@components/Event";
import { Header } from "@components/Header";
import { Counter } from "@components/Counter";
import { Button } from "@components/Button";

import { EventDTO } from "@services/eventsService";
import { BuysTicketsDO } from "@services/ticketsService";

import texts from "@mocks/texts";
import { convertNumberToReal } from "@utils/convertNumberToReal";

import {
    Amount,
    AmountLabel,
    Container,
    Content,
    Footer,
    Information,
    Label,
    TicketsAvailable,
    Total,
} from "./styles";

interface IRouteProps {
    event: EventDTO;
}

export function EventDetailsScreen() {
    const [integerTicketCounter, setIntegerTicketCounter] = useState(0);
    const [halfTicketCounter, setHalfTicketCounter] = useState(0);
    const [total, setTotal] = useState(0);

    const { navigate } = useNavigation();
    const route = useRoute();
    const { EventDetailsScreen: text } = texts;

    const { event } = route.params as IRouteProps;

    const { address, description, ticket, timeCourse } = event;

    // Controla o contador de ingressos inteiros
    function handleTicketFull(action: "remove" | "add") {
        if (action === "remove") {
            setIntegerTicketCounter(integerTicketCounter - 1);
        } else {
            setIntegerTicketCounter(integerTicketCounter + 1);
        }
    }
    // Controla o contador de meio ingresso
    function handleTicketHalf(action: "remove" | "add") {
        if (action === "remove") {
            setHalfTicketCounter(halfTicketCounter - 1);
        } else {
            setHalfTicketCounter(halfTicketCounter + 1);
        }
    }

    // Lida com a ação de comprar da tela
    function handleBuyButtonPress() {
        const { fullPrice, halfPrice } = ticket;

        if (integerTicketCounter === 0 && halfTicketCounter === 0) {
            Alert.alert(
                "Não foi possível continuar :(",
                "Por favor, selecione pelo menos um ingresso para continuar."
            );
        } else {
            const buyTickets: BuysTicketsDO = {
                fullPrice: {
                    price: fullPrice,
                    quantity: integerTicketCounter,
                },
                halfPrice: {
                    price: halfPrice,
                    quantity: halfTicketCounter,
                },
                total,
            };

            navigate("eventBuyTicketsScreen", { event, buyTickets });
        }
    }

    // Lida com a atualização do valor total da compra
    function handleTotalValue() {
        const { fullPrice, halfPrice } = ticket;
        const finalValue =
            integerTicketCounter * fullPrice + halfTicketCounter * halfPrice;
        setTotal(finalValue);
    }

    const updateTotalValue = useCallback(
        () => handleTotalValue(),
        [integerTicketCounter, halfTicketCounter]
    );

    useEffect(() => {
        updateTotalValue();
    }, [integerTicketCounter, halfTicketCounter]);

    return (
        <Container>
            <Header />
            <Event event={event} disabled />
            <Content>
                <Label>{text.labelTimeCourse}</Label>
                <Information>{timeCourse}</Information>
                <Label>{text.labelAddress}</Label>
                <Information>{address}</Information>
                <Label>{text.labelDescription}</Label>
                <Information>{description}</Information>
            </Content>
            <Footer>
                <AmountLabel>
                    {text.labelAmount}
                    <TicketsAvailable>
                        ({ticket.ticketsAvailable} disponíveis)
                    </TicketsAvailable>
                </AmountLabel>
                <Amount>{convertNumberToReal(ticket.fullPrice)}</Amount>
                <Counter
                    label="Inteiro"
                    quantity={integerTicketCounter}
                    onAdd={() => handleTicketFull("add")}
                    onRemove={() => handleTicketFull("remove")}
                />
                <Counter
                    label="Meio"
                    quantity={halfTicketCounter}
                    onAdd={() => handleTicketHalf("add")}
                    onRemove={() => handleTicketHalf("remove")}
                />
                <Total>
                    {text.labelTotalValue + convertNumberToReal(total)}
                </Total>
                <Button
                    style={{ marginTop: 12, marginBottom: 32 }}
                    text={text.buttonBuy}
                    onPress={handleBuyButtonPress}
                />
            </Footer>
        </Container>
    );
}
