import { AxiosError } from "axios";
import { IUserProps } from "@contexts/AuthContext";

import { api } from "./api";

export interface ILoginServiceRequest {
    email: string;
    password: string;
}

export interface ILoginServiceResponse {
    accessToken: string;
    user: IUserProps;
}

export interface IRegisterServiceRequest {
    id: string | number[];
    name: string;
    password: string;
    email: string;
}

export class AuthService {
    static async logIn(infos: ILoginServiceRequest) {
        try {
            const response = await api.post("/login", infos);

            return response.data as ILoginServiceResponse;
        } catch (error) {
            if (error instanceof AxiosError) {
                const e: string = error.response?.data
                    ? error.response?.data
                    : "internal error";

                throw new Error(e);
            } else {
                throw error;
            }
        }
    }

    static async register(infos: IRegisterServiceRequest) {
        try {
            const response = await api.post("/register", infos);

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}
