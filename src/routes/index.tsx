import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import MyTabBar from '../components/TabBar';

const Routes: React.FC = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Main"
                    component={Tabs}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const Tabs: React.FC = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            // screenOptions={{
            //     tabBarStyle: {
            //         position: 'absolute',
            //         height: 70,
            //         borderTopLeftRadius: 50,
            //         borderTopRightRadius: 50,
            //         backgroundColor: 'rgba(0, 0, 0, 0.2)',
            //     },
            // }}
            tabBar={(props) => <MyTabBar {...props}/>}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Stats"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            {/* <Tab.Screen
                name="Add"
                component={Home}
                options={{
                    headerShown: false,
                }}
            /> */}
            <Tab.Screen
                name="Explore"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default Routes;
