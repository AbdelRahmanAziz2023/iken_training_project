import { Colors } from "@/src/constants/colors";
import { StyleSheet, View } from "react-native";

const ReceiptSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Header Skeleton */}
        <View style={styles.headerSkeleton}>
          <View style={styles.skeletonLine} />
          <View style={[styles.skeletonLine, { marginTop: 8 }]} />
          <View style={[styles.skeletonLine, { width: "60%", marginTop: 8 }]} />
        </View>

        {/* Items Skeleton */}
        <View style={styles.itemsWrapper}>
          {[1, 2, 3].map((key) => (
            <View key={key} style={styles.itemSkeleton}>
              <View style={styles.skeletonText} />
              <View style={[styles.skeletonText, { marginTop: 6, width: "70%" }]} />
              <View style={[styles.skeletonText, { marginTop: 6, width: "40%" }]} />
            </View>
          ))}
        </View>

        {/* Separator */}
        <View style={styles.separator} />

        {/* Totals Skeleton */}
        <View style={styles.totalsSkeleton}>
          <View style={styles.skeletonLine} />
          <View style={[styles.skeletonLine, { marginTop: 12 }]} />
          <View style={[styles.skeletonLine, { marginTop: 12 }]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 120,
    overflow: "hidden",
    elevation: 5,
    borderWidth: 1,
    borderColor: Colors.gray300,
  },
  headerSkeleton: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray300,
  },
  itemsWrapper: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    gap: 20,
  },
  itemSkeleton: {
    gap: 6,
  },
  totalsSkeleton: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  separator: {
    borderTopWidth: 2,
    borderStyle: "dashed",
    borderColor: "#e5e7eb",
    marginHorizontal: 24,
    marginVertical: 12,
  },
  skeletonLine: {
    height: 16,
    backgroundColor: Colors.gray300,
    borderRadius: 8,
    width: "100%",
  },
  skeletonText: {
    height: 12,
    backgroundColor: Colors.gray300,
    borderRadius: 6,
    width: "80%",
  },
});

export default ReceiptSkeleton;
