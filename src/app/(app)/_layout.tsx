import { Stack } from "expo-router";
import React from "react";

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="Home" />
    </Stack>
  );
}
