import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DeliveryRoutes from './Delivery.routes'

import Profile from '~/pages/Profile';
import colors from '~/styles/colors';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.primary,
        }}
      >
        <Tab.Screen
          name="Delivery"
          options={{
            tabBarLabel: 'Entregas',
            tabBarIcon: ({ color, size }) => (
              <Icon name="menu" size={size} color={color} />
            ),
          }}
          component={DeliveryRoutes}
        />
          <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: 'Meu Perfil',
            tabBarIcon: ({ color, size }) => (
              <Icon name="account-circle" size={size} color={color} />
            ),
          }}
          component={Profile}
        />
      </Tab.Navigator>
    </>
  );
}
