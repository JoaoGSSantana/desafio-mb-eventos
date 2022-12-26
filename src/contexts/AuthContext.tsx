/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useState, useEffect } from "react";

import { api } from "@services/api";
import {
    AuthService,
    ILoginServiceRequest,
    ILoginServiceResponse,
} from "@services/authService";

export interface IUserProps {
    id: string;
    email: string;
    name: string;
}

export interface IAuthContextDataProps {
    user: IUserProps;
    logIn: (infos: ILoginServiceRequest) => Promise<void>;
    logOut: () => Promise<void>;
    isUserLoading: boolean;
}

interface IAuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as IAuthContextDataProps);

export function AuthProvider({ children }: IAuthProviderProps) {
    const [isUserLoading, setIsUserLoading] = useState(false);
    const [user, setUser] = useState<IUserProps>({} as IUserProps);
    const [response, setResponse] = useState<ILoginServiceResponse>(
        {} as ILoginServiceResponse
    );

    async function logIn(infos: ILoginServiceRequest) {
        try {
            setIsUserLoading(true);
            const result = await AuthService.logIn(infos);
            setResponse(result);
        } catch (error) {
            throw error;
        } finally {
            setIsUserLoading(false);
        }
    }

    async function logOut() {
        try {
            setIsUserLoading(true);
            setResponse({} as ILoginServiceResponse);
            setUser({} as IUserProps);
        } catch (error) {
            throw error;
        } finally {
            setIsUserLoading(false);
        }
    }

    function updateContextInformation() {
        try {
            setIsUserLoading(true);
            setUser(response.user);
            api.defaults.headers.common.Authorization = `Bearer ${response.accessToken}`;
        } catch (error) {
            throw error;
        } finally {
            setIsUserLoading(false);
        }
    }

    useEffect(() => {
        if (response?.accessToken && response?.user) {
            updateContextInformation();
        }
    }, [response]);

    return (
        <AuthContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
                logIn,
                logOut,
                user,
                isUserLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
