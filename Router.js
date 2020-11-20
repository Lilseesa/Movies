import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import { HomeScreen, DetailsScreen, CastAndCrewScreen, ProfileScreen } from './src/screens';

import constants from './src/utils/constants';
import { Dimensions } from 'react-native';

const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const { width } = Dimensions.get('window');

const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator
			initialRouteName={constants.SCREEN.HOME}
			screenOptions={{
				headerStyle: {
					backgroundColor: constants.COLORS.LIGHT_GRAY,
				},
				headerLeft: (props) =>
					props.canGoBack && (
						<MaterialCommunityIcons
							name="keyboard-backspace"
							size={24}
							color={constants.COLORS.TEXT_COLOR}
							{...props}
							style={{ marginLeft: 20 }}
						/>
					),
			}}
		>
			<HomeStack.Screen
				name={constants.SCREEN.HOME}
				component={HomeScreen}
				options={{
					title: 'MOVIES',
					headerShown: false,
				}}
			/>
			<HomeStack.Screen
				name={constants.SCREEN.DETAILS}
				component={DetailsScreen}
				options={{
					title: '',
					headerBackTitleVisible: false,
					headerTransparent: true,
				}}
			/>
			<HomeStack.Screen name={constants.SCREEN.CASTANDCREW} component={CastAndCrewScreen} />
		</HomeStack.Navigator>
	);
};

const Router = () => (
	<NavigationContainer>
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === constants.SCREEN.MAIN) {
						iconName = focused ? 'movie' : 'movie-outline';
					} else if (route.name === constants.SCREEN.PROFILE) {
						iconName = 'face-profile';
					}

					return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
				},
			})}
			tabBarOptions={{
				activeTintColor: constants.COLORS.WARNING,
				inactiveTintColor: constants.COLORS.LIGHT_GRAY,
				showLabel: false,
				keyboardHidesTabBar: true,
				tabStyle: {
					backgroundColor: 'rgba(0,0,0,0)',
				},
				style: {
					backgroundColor: constants.COLORS.LIGHT,
					borderTopLeftRadius: 35,
					borderTopRightRadius: 35,

					position: 'absolute',
					bottom: 0,
					width: width,
					height: 80,
					zIndex: 10,
					padding: 10,
				},
			}}
		>
			<Tab.Screen name={constants.SCREEN.MAIN} component={HomeStackScreen} />
			<Tab.Screen name={constants.SCREEN.PROFILE} component={ProfileScreen} />
		</Tab.Navigator>
	</NavigationContainer>
);

export default Router;
