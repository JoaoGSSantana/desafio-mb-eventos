import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { FlatList } from "react-native";

import { SmileySad } from "phosphor-react-native";

import { SearchInput } from "@components/SearchInput";
import { Event } from "@components/Event";
import { Select } from "@components/Select";
import { EmptyList } from "@components/EmptyList";

import { EventDTO, EventsService } from "@services/eventsService";

import { Container, FilterGroup, HeaderContainer } from "./styles";

export function EventsScreen() {
    const [search, setSearch] = useState("");
    const [filterSelected, setFilterSelected] = useState("all");
    const [events, setEvents] = useState<EventDTO[]>([] as EventDTO[]);
    const [eventsRaw, setEventsRaw] = useState<EventDTO[]>([] as EventDTO[]);

    const { navigate } = useNavigation();

    const { colors } = useTheme();

    // Renderiza o filtro por tipo utilizando o componente Select
    function renderFilter() {
        return (
            <FilterGroup>
                <Select
                    text="Todos"
                    isSelected={filterSelected === "all"}
                    onSelect={() => setFilterSelected("all")}
                />
                <Select
                    text="Empresas"
                    isSelected={filterSelected === "company"}
                    onSelect={() => setFilterSelected("company")}
                />
                <Select
                    text="Universidades"
                    isSelected={filterSelected === "university"}
                    onSelect={() => setFilterSelected("university")}
                />
            </FilterGroup>
        );
    }
    // Lica com a busca de eventos
    function handleSearch() {
        setEvents(
            eventsRaw.filter((event) =>
                event.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }
    // Lida com a seleção de um evento
    function handleSelectEvent(event: EventDTO) {
        navigate("eventDetailScreen", { event });
    }
    // Executa a atualização da lista quando a tela ganha o foco
    useFocusEffect(
        useCallback(() => {
            // Busca os eventos no back-end
            async function fetchEvents() {
                try {
                    const result = await EventsService.list();

                    setEvents(result);
                    setEventsRaw(result);
                } catch (error) {
                    setEvents([]);
                }
            }

            fetchEvents();
        }, [])
    );
    // Lida com a atualização da lista por busca
    useEffect(() => {
        handleSearch();
    }, [search]);
    // Lida com a atualização por filtro
    useEffect(() => {
        function handleFilterSelected() {
            if (filterSelected === "all") setEvents(eventsRaw);
            else
                setEvents(
                    eventsRaw.filter((event) => event.type === filterSelected)
                );
        }

        handleFilterSelected();
    }, [filterSelected]);

    return (
        <Container>
            <HeaderContainer>
                <SearchInput
                    placeholder="Buscar evento"
                    onChangeText={setSearch}
                    onSearch={handleSearch}
                    returnKeyType="search"
                    onSubmitEditing={handleSearch}
                />
            </HeaderContainer>
            {renderFilter()}
            <FlatList
                data={events}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => (
                    <Event
                        event={item}
                        onPress={() => handleSelectEvent(item)}
                    />
                )}
                contentContainerStyle={{
                    paddingBottom: "20%",
                }}
                ListEmptyComponent={
                    <EmptyList
                        text="Nenhum evento disponível no momento.Tente em outro momento!"
                        icon={
                            <SmileySad
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
