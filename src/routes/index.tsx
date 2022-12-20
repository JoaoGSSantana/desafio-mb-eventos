import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
    const { colors } = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: colors.gray[900] }}>
            <NavigationContainer>
                <AuthRoutes />
            </NavigationContainer>
        </View>
    );
}
