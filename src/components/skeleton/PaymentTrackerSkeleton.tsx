import { Colors } from "@/src/constants/colors";
import React from "react";
import { StyleSheet, View } from "react-native";

const ParticipantSkeleton = () => (
  <View style={styles.participant}>
    <View style={styles.avatar} />
    <View style={styles.lines}>
      <View style={[styles.line, { width: "60%" }]} />
      <View style={[styles.line, { width: "40%", marginTop: 8 }]} />
    </View>
    <View style={styles.toggleSkeleton} />
  </View>
);

const PaymentTrackerSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <View style={styles.iconCircle} />
          <View style={styles.headerLines}>
            <View style={[styles.line, { width: "55%" }]} />
            <View style={[styles.line, { width: "35%", marginTop: 8 }]} />
          </View>
        </View>

        <View style={styles.receiver} />

        <View style={styles.progressRow}>
          <View style={styles.progressBar} />
        </View>

        <View style={styles.participantsList}>
          <ParticipantSkeleton />
          <View style={styles.sep} />
          <ParticipantSkeleton />
          <View style={styles.sep} />
          <ParticipantSkeleton />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
    alignItems: "center",
  },
  card: {
    width: "100%",
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.gray200,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 3,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.gray300,
  },
  headerLines: {
    flex: 1,
  },
  receiver: {
    height: 56,
    backgroundColor: Colors.gray300,
    borderRadius: 10,
    marginVertical: 14,
  },
  progressRow: {
    paddingVertical: 6,
  },
  progressBar: {
    height: 12,
    width: "80%",
    backgroundColor: Colors.gray300,
    borderRadius: 8,
  },
  participantsList: {
    marginTop: 10,
  },
  participant: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.gray300,
  },
  lines: {
    flex: 1,
  },
  line: {
    height: 12,
    backgroundColor: Colors.gray300,
    borderRadius: 8,
  },
  toggleSkeleton: {
    width: 44,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.gray300,
  },
  sep: {
    height: 1,
    backgroundColor: Colors.gray200,
  },
});

export default PaymentTrackerSkeleton;
