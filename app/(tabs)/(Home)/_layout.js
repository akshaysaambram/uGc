import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="Details"
        options={{
          title: "Details",
        }}
      />
    </Stack>
  );
}
