import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RegisterScreen } from "@screens/RegisterScreen";
import { HomeScreen } from "../screens/HomeScreen";

export function AuthRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="homeScreen" component={HomeScreen} />
            <Screen name="registerScreen" component={RegisterScreen} />
        </Navigator>
    );
}
