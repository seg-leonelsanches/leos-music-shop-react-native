import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import {
  createClient,
  AnalyticsProvider,
} from "@segment/analytics-react-native";
import HelloComponent from "./components/Hello";

const segmentClient = createClient({
  writeKey: "e2eUa8DpU2jAZZzJSpVnDiHYJalA6XkS",
  trackAppLifecycleEvents: true,
});

export default function App() {
  return (
    <AnalyticsProvider client={segmentClient}>
      <View style={styles.container}>
        <HelloComponent name="Josh" />
        <StatusBar style="auto" />
      </View>
    </AnalyticsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
