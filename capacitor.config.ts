import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.retro.app",
  appName: "retro",
  webDir: "out",
  server: {
    androidScheme: "https",
    url: "http://172.20.10.2:3000",
    cleartext: true,
  },
};

export default config;
