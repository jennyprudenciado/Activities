import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppProvider, useAppContext } from './src/context/AppContext';
import ShopScreen from './src/screens/shopScreen';
import CartScreen from './src/screens/CartScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { totalCount, isUpdating } = useAppContext();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerRight: () =>
          isUpdating ? (
            <Text style={{ marginRight: 14, fontSize: 13 }}>⏳ Saving...</Text>
          ) : null,
      }}
    >
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          headerTitle: '🛍️ Shop',
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>🛍️</Text>,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitle: '🛒 Cart',
          tabBarIcon: () => <Text style={{ fontSize: 18 }}>🛒</Text>,
          tabBarBadge: totalCount > 0 ? totalCount : undefined,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}