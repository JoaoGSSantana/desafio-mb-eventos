import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "@screens/HomeScreen";
import { LoginScreen } from "@screens/LoginScreen";
import { RegisterScreen } from "@screens/RegisterScreen";

export function AuthRoutes() {
    const { Navigator, Screen } = createNativeStackNavigator();

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="homeScreen" component={HomeScreen} />
            <Screen name="loginScreen" component={LoginScreen} />
            <Screen name="registerScreen" component={RegisterScreen} />
        </Navigator>
    );
}
