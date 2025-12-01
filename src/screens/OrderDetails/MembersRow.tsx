import CustomText from "@/src/components/common/CustomText";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

type OrderItem = {
  label?: string;
  price?: number;
};

type Props = {
  status: string;
  setStatus: (s: string) => void;
  membersCount?: number;
  isHost?: boolean;
};

const MembersRow = ({
  status,
  setStatus,
  isHost = false,
  membersCount = 3,
}: Props) => {
  const isLocked = status === "locked";
  const isOpened = status === "opened";

  return (
    <View style={styles.membersRow}>
      <View style={{ flex: 1 }}>
        <CustomText
          text={`${membersCount} members`}
          textStyle={[styles.membersText]}
        />
      </View>

      <View>
        {isHost ? (
          <Pressable
            onPress={() => {
              if (isOpened) setStatus("placed");
              if (isLocked) setStatus("opened");
            }}
          >
            <CustomText
              text={isOpened ? "Cancel" : "Unlock"}
              textStyle={[styles.actionText]}
            />
          </Pressable>
        ) : (
          isOpened && (
            <Pressable>
              <CustomText text="Leave" textStyle={[styles.actionText]} />
            </Pressable>
          )
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  membersRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  membersText: { fontSize: 14, fontFamily: "SenMedium", color: "#374151" },
  actionText: { fontSize: 14, fontFamily: "SenBold", color: "#EF4444" },
});

export default MembersRow;
