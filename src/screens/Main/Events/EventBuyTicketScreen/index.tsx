import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import uuid from "react-native-uuid";

import { Money, CreditCard } from "phosphor-react-native";

import { Button } from "@components/Button";
import { Counter } from "@components/Counter";
import { Event } from "@components/Event";
import { Header } from "@components/Header";
import { Select } from "@components/Select";

import { EventDTO } from "@services/eventsService";
import {
    BuysTicketsDO,
    PaymentMethodDO,
    TicketsDTO,
    TicketsService,
} from "@services/ticketsService";

import texts from "@mocks/texts";
import { convertNumberToReal } from "@utils/convertNumberToReal";

import { useAuth } from "@hooks/useAuth";
import {
    Amount,
    AmountLabel,
    Container,
    Content,
    Footer,
    Label,
    PaymentContainer,
    TicketContainer,
    TicketText,
    Title,
} from "./styles";

interface IRouteProps {
    event: EventDTO;
    buyTickets: BuysTicketsDO;
}

export function EventBuyTicketsScreen() {
    const [installmentCounter, setInstallmentCounter] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState<"inCash" | "credit">(
        "inCash"
    );
    const [isLoading, setIsLoading] = useState(false);

    const { EventBuysTicketsScreen: text } = texts;

    const { navigate } = useNavigation();
    const route = useRoute();

    const { event, buyTickets } = route.params as IRouteProps;
    const { user } = useAuth();

    const { fullPrice, halfPrice, total } = buyTickets;

    // controla o contador de parcelas
    function handleInstallments(action: "remove" | "add") {
        if (action === "remove") {
            setInstallmentCounter(installmentCounter - 1);
        } else {
            setInstallmentCounter(installmentCounter + 1);
        }
    }
    // Renderiza o component de ticket caso exista
    function renderTicket(
        ticket: { quantity: number; price: number },
        type: "half" | "full"
    ) {
        const { quantity, price } = ticket;
        // textos complementares
        const ticketsType = {
            full: "ingresso inteiro",
            half: "meio ingresso",
        };

        return (
            <TicketContainer>
                <TicketText>
                    {quantity} x {ticketsType[type]}
                </TicketText>
                <TicketText>{convertNumberToReal(price)}</TicketText>
            </TicketContainer>
        );
    }
    // Cria objeto com as informações de pagamento
    function handleCreatePayment(): PaymentMethodDO {
        return {
            type: paymentMethod,
            installments: installmentCounter,
        };
    }
    // Criando objeto de compra
    function handleBuildPurchaseDO(): TicketsDTO {
        const {
            name,
            organizer,
            type,
            date,
            timeCourse,
            address,
            id: eventId,
        } = event;
        const paymentMethods = handleCreatePayment();
        const id: string = uuid.v4() as string;

        return {
            id,
            name,
            organizer,
            type,
            date,
            timeCourse,
            address,
            eventId,
            userId: user.id,
            buyTickets,
            paymentMethods,
        };
    }
    // Finaliza a compra
    async function handleFinishBuy() {
        try {
            setIsLoading(true);
            const purchase: TicketsDTO = handleBuildPurchaseDO();

            await TicketsService.buyTicket(purchase);

            navigate("responseScreen", {
                success: true,
                buttonText: "Ok",
                title: "Compra realizada com sucesso!",
                message:
                    "Seus ingressos estarão disponíveis na área meus ingressos.",
                goToMain: true,
            });
        } catch (error) {
            navigate("responseScreen", {
                success: false,
                buttonText: "Tente novamente",
                title: "Não foi possível realizar sua compra, tente novamente!",
            });
        } finally {
            setIsLoading(false);
        }
    }
    // Lida com a quantidade de parcelas de acordo como o meio de pagamento
    function handleInstallmentsByMethod() {
        if (paymentMethod === "inCash") {
            setInstallmentCounter(1);
        }
    }
    useEffect(() => {
        handleInstallmentsByMethod();
    }, [paymentMethod]);

    return (
        <Container>
            <Header />
            <Event event={event} disabled />
            <Content>
                <Title>{text.title}</Title>
                <Label>{text.labelWhatBought}</Label>
                {fullPrice.quantity > 0 && renderTicket(fullPrice, "full")}
                {halfPrice.quantity > 0 && renderTicket(halfPrice, "half")}
                <Label>{text.labelPayment}</Label>
                <PaymentContainer>
                    <Select
                        text="À vista"
                        isSelected={paymentMethod === "inCash"}
                        onSelect={() => setPaymentMethod("inCash")}
                        withIcon={
                            <Money color="white" size={24} weight="duotone" />
                        }
                    />
                    <Select
                        text="Crédito"
                        isSelected={paymentMethod === "credit"}
                        onSelect={() => setPaymentMethod("credit")}
                        withIcon={
                            <CreditCard
                                color="white"
                                size={24}
                                weight="duotone"
                            />
                        }
                    />
                </PaymentContainer>
                <Label>{text.labelInstallment}</Label>
                <Counter
                    label="Parcelas"
                    quantity={installmentCounter}
                    maxQuantity={paymentMethod === "credit" ? 6 : 1}
                    minQuantity={1}
                    onAdd={() => handleInstallments("add")}
                    onRemove={() => handleInstallments("remove")}
                />
            </Content>
            <Footer>
                <AmountLabel>{text.labelTotalValue}</AmountLabel>
                <Amount>{convertNumberToReal(total)}</Amount>
                <Button
                    isLoading={isLoading}
                    style={{ marginTop: 12, marginBottom: 32 }}
                    text={text.buttonBuy}
                    onPress={handleFinishBuy}
                />
            </Footer>
        </Container>
    );
}
