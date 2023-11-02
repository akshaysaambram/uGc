import React from "react";

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#663399", // Color for the active tab
        tabBarInactiveTintColor: "black", // Color for inactive tabs
      }}
    >
      <Tabs.Screen
        name="(Home)"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="(Profile)"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="person" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
