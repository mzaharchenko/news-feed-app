import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, ImageBackground } from 'react-native';
import { createSwitchNavigator,createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import firebase from '@react-native-firebase/app';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Loading from './Loading'
import Login from './Login'
import Main from './Main'
import Logo from './Logo'
import Detail from './Detail'
import Profile from './Profile'


// TODO(you): import any additional firebase services that you require for your app, e.g for auth:
//    1) install the npm package: `yarn add @react-native-firebase/auth@alpha` - you do not need to
//       run linking commands - this happens automatically at build time now
//    2) rebuild your app via `yarn run run:android` or `yarn run run:ios`
//    3) import the package here in your JavaScript code: `import '@react-native-firebase/auth';`
//    4) The Firebase Auth service is now available to use here: `firebase.auth().currentUser`

const FeedStack = createStackNavigator({ Main, Detail });
const ProfileStack = createStackNavigator({ Profile });
const AuthStack = createStackNavigator({ Loading, Login }, {defaultNavigationOptions: {headerShown: false}});

const MainTabs = createBottomTabNavigator(
	{
	  Feed: {
	    screen: FeedStack,
	    navigationOptions: {
	      tabBarLabel: 'Feed',
		  tabBarIcon: ({tintColor}) => (
		      <Icon name='list' size={25} color={tintColor} />
		    )
	    },
	  },
	  Profile: {
	    screen: ProfileStack,
	    navigationOptions: {
	      tabBarLabel: 'Profile',
		  tabBarIcon: ({tintColor}) => (
		      <Icon name='user' size={25} color={tintColor} />
		    )
	    },
	  },
	},
	{
		tabBarOptions: {
	  	  activeTintColor: 'tomato',
	  	  inactiveTintColor: 'gray',
	  	},
	}
);

export default createAppContainer(createSwitchNavigator(
	{
		Login,
		Loading,
		MainTabs
	},
	{
		initialRouteName: 'Loading'
	}
));

