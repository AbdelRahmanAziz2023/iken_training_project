const ENV = process.env.EXPO_PUBLIC_ENV;

export default {
  expo: {
    name:
      ENV === "production"
        ? "Order Together"
        : ENV === "staging"
        ? "Order Together Staging"
        : "Order Together Dev",

    slug: "order-together",

    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "ordertogether",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,

    // Add this block to disable splash
    splash: {
      backgroundColor: "transparent", // makes background invisible
      image: null,                    // no splash image
      resizeMode: "contain",          // optional
    },

    ios: {
      supportsTablet: true,
      bundleIdentifier:
        ENV === "production"
          ? "com.abdelrahmanaziz23.ordertogether"
          : ENV === "staging"
          ? "com.abdelrahmanaziz23.ordertogetherstaging"
          : "com.abdelrahmanaziz23.ordertogetherdev",
    },

    android: {
      adaptiveIcon: {
        backgroundColor: "#E6F4FE",
        foregroundImage: "./assets/images/android-icon-foreground.png",
        backgroundImage: "./assets/images/android-icon-background.png",
        monochromeImage: "./assets/images/android-icon-monochrome.png",
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,

      package:
        ENV === "production"
          ? "com.abdelrahmanaziz23.ordertogether"
          : ENV === "staging"
          ? "com.abdelrahmanaziz23.ordertogetherstaging"
          : "com.abdelrahmanaziz23.ordertogetherdev",

      jsEngine: "hermes",
    },

    extra: {
      env: ENV,
      eas: {
        projectId: "ec3cbc4d-c89e-44f3-8acc-bd59bb5f4e81",
      },
    },
  },
};
