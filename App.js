import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, Platform, Image, Text, View, ImageBackground } from 'react-native';
import { createSwitchNavigator,createAppContainer, createBottomTabNavigator   } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from '@react-native-firebase/app';
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

const AppStack = createStackNavigator({ Main, Detail, Profile });
const AuthStack = createStackNavigator({ Loading, Login }, {defaultNavigationOptions: {headerShown: false}});

export default createAppContainer(createSwitchNavigator(
{
Loading,
App: AppStack,
Auth: AuthStack,
},
{
initialRouteName: 'Loading'
}
));

