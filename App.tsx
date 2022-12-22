import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import theme from "@theme/theme";

import { Loading } from "@components/Loading";

import {
    useFonts,
    Inter_400Regular as InterRegular,
    Inter_700Bold as InterBold,
} from "@expo-google-fonts/inter";

import { Routes } from "./src/routes";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
    const [fontsLoaded] = useFonts({
        InterRegular,
        InterBold,
    });
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <StatusBar
                    // eslint-disable-next-line react/style-prop-object
                    style="light"
                    backgroundColor="transparent"
                    translucent
                />
                {fontsLoaded ? <Routes /> : <Loading />}
            </AuthProvider>
        </ThemeProvider>
    );
}
