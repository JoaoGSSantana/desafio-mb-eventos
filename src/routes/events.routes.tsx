import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { EventBuyTicketsScreen } from "@screens/Main/Events/EventBuyTicketScreen";
import { EventDetailsScreen } from "@screens/Main/Events/EventDetailsScreen";
import { EventsScreen } from "@screens/Main/Events/EventsScreen";
import { ResponseScreen } from "@screens/Main/ResponseScreen";

export function EventsRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="eventsMain" component={EventsScreen} />
            <Screen name="eventDetailScreen" component={EventDetailsScreen} />
            <Screen
                name="eventBuyTicketsScreen"
                component={EventBuyTicketsScreen}
            />
            <Screen name="responseScreen" component={ResponseScreen} />
        </Navigator>
    );
}
