import { EventDTO } from "@services/eventsService";
import { BuysTicketsDO } from "@services/ticketsService";

/* eslint-disable no-unused-vars */
export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            homeScreen: undefined;
            registerScreen: undefined;
            loginScreen: undefined;
            eventsScreen: undefined;
            eventsMain: undefined;
            eventDetailScreen: {
                event: EventDTO;
            };
            eventBuyTicketsScreen: {
                event: EventDTO;
                buyTickets: BuysTicketsDO;
            };
            responseScreen: {
                success: boolean;
                title: string;
                message?: string;
                buttonText: string;
                goToMain?: boolean;
            };
        }
    }
}
