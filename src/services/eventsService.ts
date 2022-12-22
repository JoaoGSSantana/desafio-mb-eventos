import { TagType } from "@components/Tag";
import { api } from "./api";

export interface EventDTO {
    id: string;
    name: string;
    organizer: string;
    type: TagType;
    date: string;
    timeCourse: string;
    address: string;
    description: string;
    ticket: {
        fullPrice: number;
        halfPrice: number;
        ticketsAvailable: number;
    };
}

export class EventsService {
    static async list() {
        try {
            const response = await api.get("/440/events");

            return response.data as EventDTO[];
        } catch (error) {
            return [];
        }
    }
}
