import { TagType } from "@components/Tag";
import { api } from "./api";

export interface PaymentMethodDO {
    type: "inCash" | "credit";
    installments: number;
}

export interface BuysTicketsDO {
    fullPrice: {
        price: number;
        quantity: number;
    };
    halfPrice: {
        price: number;
        quantity: number;
    };
    total: number;
}

export interface TicketsDTO {
    id: string;
    name: string;
    organizer: string;
    type: TagType;
    date: string;
    timeCourse: string;
    address: string;
    eventId: string;
    userId: string;
    buyTickets: BuysTicketsDO;
    paymentMethods: PaymentMethodDO;
}

export class TicketsService {
    static async buyTicket(body: TicketsDTO) {
        try {
            const response = await api.post("/660/tickets", body);

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async listMyTickets(userId: string) {
        try {
            const response = await api.get(`/660/tickets?userId=${userId}`);

            return response.data;
        } catch (error) {
            return [];
        }
    }
}
