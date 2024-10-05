import { Tabs } from 'expo-router';
import React, { useContext } from 'react';

import Entypo from '@expo/vector-icons/Entypo';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { CartContext } from '@/context/CartContext';
import { Text, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'red'].tint,
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Reorder"
        options={{
          title: 'Reorder',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="reorder" size={24} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          title: 'Cart',
          tabBarIcon: ({ color, focused }) => {
            const {carts} = useContext(CartContext);
            return (
              <View style={{ position: "relative" }}>
                <MaterialCommunityIcons 
                  name="cart" 
                  size={24} 
                  color={color}
                />
                <View style={{ 
                  height: 14,
                  width: 14,
                  borderRadius: 7,
                  backgroundColor: color,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  top: -10,
                  right: -5,
                 }}>
                  <Text style={{ 
                    fontSize: 10,
                    color: "white",
                    fontWeight: "500",
                   }}>{carts?.length}</Text>
                </View>
              </View>
            )
          },
        }}
      />
      <Tabs.Screen
        name="Account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6 name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
