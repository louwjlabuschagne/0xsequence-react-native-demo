import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import '@ethersproject/shims';
import { SequenceWaaS } from "@0xsequence/waas";

// as per docs here: https://docs.sequence.xyz/waas/intro/quickstart
const PROJECT_ACCESS_KEY = "AQAAAAAAAEGvyZiWA9FMslYeG_yayXaHnSI";
const WAAS_CONFIG_KEY =
  "eyJwcm9qZWN0SWQiOjE2ODE1LCJycGNTZXJ2ZXIiOiJodHRwczovL3dhYXMuc2VxdWVuY2UuYXBwIn0=";

const waas = new SequenceWaaS({
  projectAccessKey: `${PROJECT_ACCESS_KEY}`,
  waasConfigKey: `${WAAS_CONFIG_KEY}`,
  network: "mumbai",
});

export default function App() {
  // Use useState to store the sessionHash
  const [sessionHash, setSessionHash] = useState(null);

  useEffect(() => {
    // Define an async function inside the useEffect hook
    const fetchSessionHash = async () => {
      try {
        const hash = await waas.getSessionHash();
        console.log({ hash });
        setSessionHash(hash); // Update the state with the fetched session hash
      } catch (error) {
        console.error("Error fetching session hash:", error);
      }
    };

    fetchSessionHash(); // Call the async function
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {/* Optionally display the sessionHash */}
      {sessionHash && <Text>Session Hash: {sessionHash}</Text>}
      <StatusBar style="auto" />
    </View>
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
