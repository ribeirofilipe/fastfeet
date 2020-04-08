import React from 'react';
import { Dimensions } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';

import Delivery from '~/pages/Delivery';
import Detail from '~/pages/Detail';
import ProblemInfo from '~/pages/ProblemInfo';
import Problem from '~/pages/Problem';
import DeliveryConfirm from '~/pages/DeliveryConfirm';

const Stack = createStackNavigator();

export default function DeliveryRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: '#fff',
        headerTransparent: true,
      }}
      initialRouteName="Delivery"
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Delivery"
        component={Delivery}
      />
       <Stack.Screen
        name="Details"
        component={Detail}
        options={{
          title: 'Detalhes da encomenda',
        }}
      />
       <Stack.Screen
        name="ProblemInfo"
        component={ProblemInfo}
        options={{
          title: 'Informar problema',
        }}
      />
       <Stack.Screen
        name="Problem"
        component={Problem}
        options={{
          title: 'Visualizar problema',
        }}
      />
       <Stack.Screen
        name="DeliveryConfirm"
        component={DeliveryConfirm}
        options={{
          title: 'Confirmar entrega',
        }}
      />
    </Stack.Navigator>
  );
}
