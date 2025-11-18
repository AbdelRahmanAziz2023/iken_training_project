import { Redirect, Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store/store";

if (__DEV__) {
  require("../../ReactotronConfig");
}

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowBanner: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//     shouldShowList: true,
//   }),
// });

function RootNavigator() {
  const user = {};
  console.log(user);
  if (user) return <Redirect href="/(auth)/Login" />;
  return <Redirect href="/(app)/Home" />;
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }} />
      <RootNavigator />
      {/* <Toast /> Place here */}
    </Provider>
  );
}
