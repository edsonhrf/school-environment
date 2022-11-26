
import { createNativeStackNavigator  } from "@react-navigation/native-stack";

import { AccountType } from "../screens/AccountType";
import { SignIn } from "../screens/SignIn";

const Stack = createNativeStackNavigator();

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="AccountType"
                component={AccountType}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}