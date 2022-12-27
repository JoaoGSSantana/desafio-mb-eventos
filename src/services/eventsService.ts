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
            const { data } = await api.get<EventDTO[]>("/440/events");

            return data;
        } catch (error) {
            return [];
        }
    }
}
