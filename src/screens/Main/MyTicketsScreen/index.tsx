import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { Ticket as TicketIcon } from "phosphor-react-native";

import { FlatList } from "react-native";
import { Ticket } from "@components/Ticket";
import { EmptyList } from "@components/EmptyList";

import texts from "@mocks/texts";
import { useAuth } from "@hooks/useAuth";

import { TicketsDTO, TicketsService } from "@services/ticketsService";

import {
    Container,
    HeaderContainer,
    LogOut,
    LogOutButton,
    Title,
    TitleContainer,
} from "./styles";

export function MyTicketsScreen() {
    const [myTickets, setMyTickets] = useState<TicketsDTO[]>();
    const { user, logOut } = useAuth();

    const { MyTicketsScreen: text } = texts;
    const { colors } = useTheme();

    useFocusEffect(
        useCallback(() => {
            // Busca os ingressos do usuário no back-end
            async function fetchMyTickets() {
                try {
                    const result = await TicketsService.listMyTickets(user.id);
                    setMyTickets(result);
                } catch (error) {
                    setMyTickets([]);
                }
            }

            fetchMyTickets();
        }, [])
    );

    return (
        <Container>
            <HeaderContainer>
                <TitleContainer>
                    <Title>{text.title}</Title>
                </TitleContainer>
                <LogOutButton onPress={logOut}>
                    <LogOut>{text.logOut}</LogOut>
                </LogOutButton>
            </HeaderContainer>
            <FlatList
                data={myTickets}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => <Ticket ticket={item} />}
                contentContainerStyle={{
                    paddingBottom: "20%",
                }}
                ListEmptyComponent={
                    <EmptyList
                        text="Não há nenhum ingresso, por favor faça uma compra primeiro."
                        icon={
                            <TicketIcon
                                color={colors.gray[600]}
                                size={64}
                                weight="duotone"
                            />
                        }
                    />
                }
            />
        </Container>
    );
}
