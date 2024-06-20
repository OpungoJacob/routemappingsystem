
import "dotenv/config"
export default {
  "expo": {
    "name": "routemapping",
    "slug": "routemapping",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "myapp",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/images/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#1A162A"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#1A162A"
      },
      icon: "./assets/icon.png",
      package: "com.tudor14aqd.pix",
      permissions: [
        "ACCESS_FINE_LOCATION",
        "ACCESS_COARSE_LOCATION"
      ]
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/terratrack.png"
    },
    "plugins": [
      "expo-secure-store",
      "expo-location",
     
      [
        "@rnmapbox/maps",
        {
          RNMapboxMapsImpl: "mapbox",
          RNMapboxMapsDownloadToken: process.env.MAPBOX_DOWNLOAD_TOKEN
        }
      ]
    ],
    extra: {
      eas: {
        projectId: "9539c147-db45-47d7-9cc6-a0e05cc13527"
      },
      MAPBOX_ACCESS_TOKEN: process.env.MAPBOX_ACCESS_TOKEN,
      MAPBOX_DOWNLOAD_TOKEN: process.env.MAPBOX_DOWNLOAD_TOKEN,
      TOPOGRAPHIC_URL: process.env.TOPOGRAPHIC_URL,
      SATELLITE_URL: process.env.SATELLITE_URL,
      SENTRY_DSN: process.env.SENTRY_DSN,
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
      CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY
    },
    updates: {
      url: "https://u.expo.dev/9539c147-db45-47d7-9cc6-a0e05cc13527"
    },
    runtimeVersion: {
      policy: "sdkVersion"
    },
    "experiments": {
      "typedRoutes": true
    },
      "owner": "jacobopungo"
  }
};