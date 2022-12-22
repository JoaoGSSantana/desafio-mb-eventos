import { useTheme } from "styled-components/native";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MyTicketsScreen } from "@screens/Main/MyTicketsScreen";

import { Calendar, Ticket } from "phosphor-react-native";
import { EventsRoutes } from "./events.routes";

export function AppRoutes() {
    const { Navigator, Screen } = createBottomTabNavigator();

    const { colors } = useTheme();
    const size = 24;

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: "below-icon",
                tabBarActiveTintColor: colors.primary[500],
                tabBarInactiveTintColor: colors.gray[500],
                tabBarStyle: {
                    position: "absolute",
                    height: 64,
                    borderTopWidth: 0,
                    padding: 12,
                    backgroundColor: colors.gray[800],
                },
                tabBarItemStyle: {
                    position: "relative",
                    top: Platform.OS === "android" ? -10 : 0,
                },
            }}
        >
            <Screen
                name="eventsScreen"
                component={EventsRoutes}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Calendar color={color} size={size} weight="duotone" />
                    ),
                    tabBarLabel: "Eventos",
                }}
            />
            <Screen
                name="myTicketsScreen"
                component={MyTicketsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ticket color={color} size={size} weight="duotone" />
                    ),
                    tabBarLabel: "Meus ingressos",
                }}
            />
        </Navigator>
    );
}
