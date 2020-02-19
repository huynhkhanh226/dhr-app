import React from 'react';
import {
    Easing,
    Animated,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-drawer';

import MainScreen from '../screens/main_screen/MainScreen.js';
import LoginScreen from '../screens/login_screen/LoginScreen.js';
import HomeScreen from "../screens/home_screen/HomeScreen";
import HomeScreen2 from '../screens/home_screen/HomeScreen2';
import SettingScreen from '../screens/setting_screen/SettingScreen';

const transitionConfig = {
    transitionSpec: {
        duration: 750,
        easing: Easing.step0,
        timing: Animated.timing
    },
    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index],
            outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] }
    },
};

const HomeStack = createStackNavigator(
    {
        HomeScreen2: HomeScreen2,
        HomeScreen: HomeScreen,
        SettingScreen: SettingScreen
    },
    {
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false,
            headerLeft: null
        }
    }
);


// const MainItem = createBottomTabNavigator(
//     {
//         HomeStack: HomeStack,
//         // PostStack: PostStack,
//     },
//     {
//         tabBarComponent: (props)=> <View/>,
//         navigationOptions: () => ({
//             header: (props)=> <View/>
//         }),
//     }
// );

const Main = createStackNavigator({
    MainScreen: MainScreen,
    // SimpleTabs: SimpleTabs,
    HomeStack: HomeStack
}, {
    headerMode: 'none',
    drawerWidth: 0,
    drawerPosition: 'left',
    contentComponent: (props) => <View {...props} />
});

const Root = createStackNavigator({
    Main: Main,
    LoginScreen: LoginScreen,
}, {
    headerMode: 'none',
    initialRouteName: 'Main',
    navigationOptions: {
        gesturesEnabled: false,
    },
    transitionConfig: () => (transitionConfig),
    cardStyle: {
        opacity: 1,
        shadowColor: 'transparent',
        backgroundColor: 'transparent'
    }
});

export default Root;
