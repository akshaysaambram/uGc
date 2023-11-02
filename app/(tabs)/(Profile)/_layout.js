import React from "react";
import { Stack } from "expo-router";

export default function ProfileUpdateLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="Profile"
        options={{
          title: "Profile",
        }}
      />
      <Stack.Screen
        name="UpdateProfile"
        options={{
          title: "Profile Update",
        }}
      />
    </Stack>
  );
}
