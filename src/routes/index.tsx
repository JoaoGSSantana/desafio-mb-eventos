import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { useAuth } from "../hooks/useAuth";
import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
    const { colors } = useTheme();

    const { user } = useAuth();

    return (
        <View style={{ flex: 1, backgroundColor: colors.gray[900] }}>
            <NavigationContainer>
                {user.name ? <AppRoutes /> : <AuthRoutes />}
            </NavigationContainer>
        </View>
    );
}
