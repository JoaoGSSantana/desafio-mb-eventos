import { PaymentMethodDO, TicketsDTO } from "@services/ticketsService";

import { convertNumberToReal } from "@utils/convertNumberToReal";
import React from "react";

import { Date as DateComponent } from "../Date";
import { Tag } from "../Tag";

import {
    Container,
    Content,
    HeaderContainer,
    HeaderContent,
    TextBold,
    Organizer,
    TextContainer,
    Text,
    Title,
    TitleContainer,
    AmountContainer,
} from "./styles";

type Props = {
    ticket: TicketsDTO;
};

function TicketComponent({ ticket }: Props) {
    const { date, name, organizer, type, buyTickets, paymentMethods } = ticket;

    const newDate = new Date(date);

    // Renderiza o component de ticket caso exista
    function renderTicket(
        ticketParam: { quantity: number; price: number },
        typeParam: "half" | "full"
    ) {
        const { quantity, price } = ticketParam;
        // textos complementares
        const ticketsType = {
            full: "ingresso inteiro",
            half: "meio ingresso",
        };

        return (
            <TextContainer>
                <Text>
                    {quantity} x {ticketsType[typeParam]}
                </Text>
                <Text>{convertNumberToReal(price)}</Text>
            </TextContainer>
        );
    }

    // Renderiza o component de método de pagamento
    function renderPayment(params: PaymentMethodDO) {
        const { type: paymentType, installments } = params;
        // textos complementares
        const paymentsTexts = {
            inCash: "À Vista",
            credit: "Crédito",
        };

        return (
            <TextContainer>
                <Text>
                    {paymentsTexts[paymentType]} - {installments} x{" "}
                    {convertNumberToReal(buyTickets.total / installments)}
                </Text>
            </TextContainer>
        );
    }

    return (
        <Container>
            <HeaderContainer>
                <HeaderContent>
                    <TitleContainer>
                        <Title>{name}</Title>
                        <Organizer>{organizer}</Organizer>
                    </TitleContainer>
                    <Tag type={type} />
                </HeaderContent>
                <DateComponent date={newDate} />
            </HeaderContainer>
            <Content>
                {buyTickets.fullPrice.quantity > 0 &&
                    renderTicket(buyTickets.fullPrice, "full")}
                {buyTickets.halfPrice.quantity > 0 &&
                    renderTicket(buyTickets.halfPrice, "half")}
                <TextBold>Método de pagamento</TextBold>
                {renderPayment(paymentMethods)}
                <AmountContainer>
                    <TextBold>
                        Valor total: {convertNumberToReal(buyTickets.total)}
                    </TextBold>
                </AmountContainer>
            </Content>
        </Container>
    );
}

export const Ticket = React.memo(TicketComponent);
